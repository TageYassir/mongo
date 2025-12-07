import mongoose from 'mongoose';

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
function jsonError(status, message) {
  return jsonResponse({ success: false, error: message }, status);
}

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const walletId = url.searchParams.get('walletId') || null;
    const limit = Math.min(100, Number(url.searchParams.get('limit')) || 100);

    const modelsMod = await import('../../models').catch(() => null);
    const mod = modelsMod?.default || modelsMod || require('../../models');
    const { Transaction } = mod;

    const filter = walletId
      ? { $or: [{ senderWalletId: walletId }, { receiverWalletId: walletId }] }
      : {};

    const transactions = await Transaction.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return jsonResponse({ success: true, transactions });
  } catch (err) {
    console.error('crypto transactions GET error', err);
    return jsonError(500, 'Internal server error');
  }
}