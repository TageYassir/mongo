module.exports = [
"[project]/.next-internal/server/app/api/crypto/transfer/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/app/api/crypto/transfer/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
(()=>{
    const e = new Error("Cannot find module '@/models/Wallet'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
async function POST(req) {
    const body = await req.json();
    const { fromWalletId, toWalletId, amount } = body;
    const amt = Number(amount);
    if (!fromWalletId || !toWalletId || !amt || amt <= 0) {
        return new Response(JSON.stringify({
            error: 'Invalid input'
        }), {
            status: 400
        });
    }
    // Ensure mongoose is connected before starting a session
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.readyState) {
    // adjust your db connect flow if needed
    // e.g. await dbConnect();
    }
    let session = null;
    try {
        session = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].startSession();
        // Try to start a transaction — this will fail on standalone mongod
        try {
            session.startTransaction();
        } catch (startTxnErr) {
            // If transactions are not supported (code 20) we'll fall back below
            if (startTxnErr && startTxnErr.code === 20) {
                throw startTxnErr; // jump to outer catch which will fallback
            }
            throw startTxnErr;
        }
        // debit sender if they have enough balance
        const sender = await Wallet.findOneAndUpdate({
            walletId: fromWalletId,
            balance: {
                $gte: amt
            }
        }, {
            $inc: {
                balance: -amt
            }
        }, {
            new: true,
            session
        });
        if (!sender) {
            await session.abortTransaction();
            session.endSession();
            return new Response(JSON.stringify({
                error: 'Insufficient funds or sender not found'
            }), {
                status: 400
            });
        }
        // credit receiver
        const receiver = await Wallet.findOneAndUpdate({
            walletId: toWalletId
        }, {
            $inc: {
                balance: amt
            }
        }, {
            new: true,
            session
        });
        if (!receiver) {
            // receiver missing: abort
            await session.abortTransaction();
            session.endSession();
            return new Response(JSON.stringify({
                error: 'Receiver not found'
            }), {
                status: 404
            });
        }
        await session.commitTransaction();
        session.endSession();
        return new Response(JSON.stringify({
            success: true,
            sender,
            receiver
        }), {
            status: 200
        });
    } catch (err) {
        // If error indicates transactions are not supported, fallback to non-transactional transfer
        const fallbackCondition = err && (err.code === 20 || err.message && err.message.includes('Transaction numbers'));
        if (fallbackCondition) {
            // Best-effort non-transactional transfer:
            try {
                // 1) debit sender atomically if enough balance
                const sender = await Wallet.findOneAndUpdate({
                    walletId: fromWalletId,
                    balance: {
                        $gte: amt
                    }
                }, {
                    $inc: {
                        balance: -amt
                    }
                }, {
                    new: true
                });
                if (!sender) {
                    return new Response(JSON.stringify({
                        error: 'Insufficient funds or sender not found (no-transaction fallback)'
                    }), {
                        status: 400
                    });
                }
                // 2) credit receiver
                const receiver = await Wallet.findOneAndUpdate({
                    walletId: toWalletId
                }, {
                    $inc: {
                        balance: amt
                    }
                }, {
                    new: true
                });
                if (!receiver) {
                    // try to compensate: credit back the sender
                    await Wallet.findOneAndUpdate({
                        walletId: fromWalletId
                    }, {
                        $inc: {
                            balance: amt
                        }
                    });
                    return new Response(JSON.stringify({
                        error: 'Receiver not found. Transfer aborted and sender compensated (best-effort)'
                    }), {
                        status: 404
                    });
                }
                return new Response(JSON.stringify({
                    success: true,
                    sender,
                    receiver,
                    warning: 'Performed without transaction (standalone mongod)'
                }), {
                    status: 200
                });
            } catch (fallbackErr) {
                return new Response(JSON.stringify({
                    error: 'Fallback transfer failed',
                    detail: String(fallbackErr)
                }), {
                    status: 500
                });
            }
        }
        // Other errors: abort transaction if applicable
        try {
            if (session) {
                await session.abortTransaction();
                session.endSession();
            }
        } catch (e) {}
        // log and return error
        console.error('transfer error (txn)', err);
        return new Response(JSON.stringify({
            error: 'Transfer failed',
            detail: String(err)
        }), {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f506a977._.js.map