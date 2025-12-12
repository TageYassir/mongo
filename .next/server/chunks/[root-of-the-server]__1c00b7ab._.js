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
"[project]/app/api/models.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Friend",
    ()=>Friend,
    "Message",
    ()=>Message,
    "Post",
    ()=>Post,
    "Transaction",
    ()=>Transaction,
    "User",
    ()=>User,
    "Wallet",
    ()=>Wallet,
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
/**
 * Use an environment variable for the URI in production.
 * Fallback to the previous hard-coded URI for local dev if not set.
 */ const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/SocialDB";
/**
 * Global cache for the connection (useful for serverless / dev hot-reload).
 * We attach to global so multiple module reloads reuse the same connection.
 */ let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        // options can be tuned as needed
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI, opts).then((mongooseInstance)=>{
            return mongooseInstance;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
/**
 * Define schemas and models.
 * Use existing compiled models if present (mongoose.models).
 */ const locationSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    lat: Number,
    lng: Number
}, {
    _id: false
});
const userSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    isValidated: {
        type: Boolean,
        default: false
    },
    location: {
        type: locationSchema,
        default: null
    },
    validationCode: {
        type: String,
        default: null
    },
    recoveryCode: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});
const postSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    content: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    user: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});
/**
 * Message schema - stores a single direct message between two users.
 * Fields:
 * - senderId: ObjectId (ref User)
 * - receiverId: ObjectId (ref User)
 * - text: String
 * - sentAt: Date
 */ const messageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    senderId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true
    },
    sentAt: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
});
/**
 * Friend (friendship) schema - stores friend requests and accepted/refused relationships
 * Fields:
 * - senderId: ObjectId (ref User)  -> the user who initiated the request
 * - receiverId: ObjectId (ref User) -> the user receiving the request
 * - status: String -> 'pending' | 'accepted' | 'refused'
 */ const friendSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    senderId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: [
            "pending",
            "accepted",
            "refused"
        ],
        default: "pending"
    }
}, {
    timestamps: true
});
/**
 * Wallet schema - stores a walletId related to a user and its balance
 * Fields:
 * - walletId: String (unique wallet identifier)
 * - userId: ObjectId (ref User)
 * - balance: Number
 */ const walletSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    walletId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});
/**
 * Transaction schema - records transfers between wallets
 * Fields:
 * - senderWalletId: String (walletId of sender)
 * - receiverWalletId: String (walletId of receiver)
 * - amount: Number
 * - status: String (optional - pending/completed/failed)
 * - sentAt: Date
 */ const transactionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    senderWalletId: {
        type: String,
        required: true
    },
    receiverWalletId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [
            "pending",
            "completed",
            "failed"
        ],
        default: "completed"
    },
    sentAt: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
});
/**
 * Avoid model overwrite in dev / hot-reload environments
 */ const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("User", userSchema);
const Post = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Post || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Post", postSchema);
const Message = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Message || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Message", messageSchema);
const Friend = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Friend || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Friend", friendSchema);
const Wallet = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Wallet || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Wallet", walletSchema);
const Transaction = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Transaction || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Transaction", transactionSchema);
/**
 * Ensure connection is established when this module is imported.
 */ connectToDatabase().catch((err)=>{
    console.error("Failed to connect to MongoDB", err);
});
;
}),
"[project]/app/api/crypto/transfer/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/crypto/transfer/route.js
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
function jsonResponse(obj, status = 200) {
    return new Response(JSON.stringify(obj), {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
function jsonError(status, message) {
    return jsonResponse({
        success: false,
        error: message
    }, status);
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const { fromWalletId, toWalletId, amount } = body || {};
        const amt = Number(amount);
        if (!fromWalletId || !toWalletId) return jsonError(400, 'fromWalletId and toWalletId are required');
        if (!amt || isNaN(amt) || amt <= 0) return jsonError(400, 'amount must be a positive number');
        // import models using the same pattern as other handlers in this repo
        const modelsMod = await __turbopack_context__.A("[project]/app/api/models.js [app-route] (ecmascript, async loader)").catch(()=>null);
        // support both ESM default and CommonJS shapes
        const mod = modelsMod?.default || modelsMod || __turbopack_context__.r("[project]/app/api/models.js [app-route] (ecmascript)");
        const { Wallet, Transaction } = mod;
        let session = null;
        let txnSupported = true;
        // Attempt transaction path
        try {
            session = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].startSession();
            try {
                session.startTransaction();
            } catch (startErr) {
                // Transactions not supported on standalone mongod -> fallback
                txnSupported = false;
            }
            if (txnSupported) {
                // debit sender atomically if they have enough balance
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
                    return jsonError(400, 'Insufficient funds or sender not found');
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
                    await session.abortTransaction();
                    session.endSession();
                    return jsonError(404, 'Receiver not found');
                }
                // record transaction
                await Transaction.create([
                    {
                        senderWalletId: fromWalletId,
                        receiverWalletId: toWalletId,
                        amount: amt,
                        status: 'completed'
                    }
                ], {
                    session
                });
                await session.commitTransaction();
                session.endSession();
                return jsonResponse({
                    success: true,
                    sender,
                    receiver
                });
            }
        } catch (err) {
            // If we get here and it's a transaction-related rejection, we'll fallback below
            const txnErr = err && (err.code === 20 || err.message && err.message.includes('Transaction numbers'));
            if (!txnErr) {
                // non-transaction error — try to clean up session then return error
                try {
                    if (session) {
                        await session.abortTransaction();
                        session.endSession();
                    }
                } catch (e) {}
                console.error('transfer error', err);
                return jsonError(500, 'Transfer failed');
            }
        // else fall through to fallback path
        }
        // Fallback: best-effort non-transactional transfer (for standalone mongod)
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
                return jsonError(400, 'Insufficient funds or sender not found (no-transaction fallback)');
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
                return jsonError(404, 'Receiver not found. Transfer aborted and sender compensated (best-effort)');
            }
            // record transaction (best-effort)
            await Transaction.create({
                senderWalletId: fromWalletId,
                receiverWalletId: toWalletId,
                amount: amt,
                status: 'completed'
            });
            return jsonResponse({
                success: true,
                sender,
                receiver,
                warning: 'Performed without transaction (standalone mongod)'
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c00b7ab._.js.map