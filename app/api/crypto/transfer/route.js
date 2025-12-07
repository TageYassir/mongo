// app/api/crypto/transfer/route.js
import mongoose from 'mongoose';

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
function jsonError(status, message) {
  return jsonResponse({ success: false, error: message }, status);
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { fromWalletId, toWalletId, amount } = body || {};
    const amt = Number(amount);

    if (!fromWalletId || !toWalletId) return jsonError(400, 'fromWalletId and toWalletId are required');
    if (!amt || isNaN(amt) || amt <= 0) return jsonError(400, 'amount must be a positive number');

    // import models using the same pattern as other handlers in this repo
    const modelsMod = await import('../../models').catch(() => null);
    // support both ESM default and CommonJS shapes
    const mod = modelsMod?.default || modelsMod || require('../../models');
    const { Wallet, Transaction } = mod;

    let session = null;
    let txnSupported = true;

    // Attempt transaction path
    try {
      session = await mongoose.startSession();
      try {
        session.startTransaction();
      } catch (startErr) {
        // Transactions not supported on standalone mongod -> fallback
        txnSupported = false;
      }

      if (txnSupported) {
        // debit sender atomically if they have enough balance
        const sender = await Wallet.findOneAndUpdate(
          { walletId: fromWalletId, balance: { $gte: amt } },
          { $inc: { balance: -amt } },
          { new: true, session }
        );
        if (!sender) {
          await session.abortTransaction();
          session.endSession();
          return jsonError(400, 'Insufficient funds or sender not found');
        }

        // credit receiver
        const receiver = await Wallet.findOneAndUpdate(
          { walletId: toWalletId },
          { $inc: { balance: amt } },
          { new: true, session }
        );
        if (!receiver) {
          await session.abortTransaction();
          session.endSession();
          return jsonError(404, 'Receiver not found');
        }

        // record transaction
        await Transaction.create(
          [{
            senderWalletId: fromWalletId,
            receiverWalletId: toWalletId,
            amount: amt,
            status: 'completed',
          }],
          { session }
        );

        await session.commitTransaction();
        session.endSession();

        return jsonResponse({ success: true, sender, receiver });
      }
    } catch (err) {
      // If we get here and it's a transaction-related rejection, we'll fallback below
      const txnErr = err && (err.code === 20 || (err.message && err.message.includes('Transaction numbers')));
      if (!txnErr) {
        // non-transaction error — try to clean up session then return error
        try { if (session) { await session.abortTransaction(); session.endSession(); } } catch (e) {}
        console.error('transfer error', err);
        return jsonError(500, 'Transfer failed');
      }
      // else fall through to fallback path
    }

    // Fallback: best-effort non-transactional transfer (for standalone mongod)
    try {
      // 1) debit sender atomically if enough balance
      const sender = await Wallet.findOneAndUpdate(
        { walletId: fromWalletId, balance: { $gte: amt } },
        { $inc: { balance: -amt } },
        { new: true }
      );
      if (!sender) {
        return jsonError(400, 'Insufficient funds or sender not found (no-transaction fallback)');
      }

      // 2) credit receiver
      const receiver = await Wallet.findOneAndUpdate(
        { walletId: toWalletId },
        { $inc: { balance: amt } },
        { new: true }
      );
      if (!receiver) {
        // try to compensate: credit back the sender
        await Wallet.findOneAndUpdate({ walletId: fromWalletId }, { $inc: { balance: amt } });
        return jsonError(404, 'Receiver not found. Transfer aborted and sender compensated (best-effort)');
      }

      // record transaction (best-effort)
      await Transaction.create({
        senderWalletId: fromWalletId,
        receiverWalletId: toWalletId,
        amount: amt,
        status: 'completed',
      });

      return jsonResponse({
        success: true,
        sender,
        receiver,
        warning: 'Performed without transaction (standalone mongod)',
      });
    } catch (fallbackErr) {
      console.error('transfer fallback error', fallbackErr);
      return jsonError(500, 'Fallback transfer failed');
    }
  } catch (err) {
    console.error('transfer top-level error', err);
    return jsonError(500, 'Internal server error');
  }
}