module.exports = [
"[project]/.next-internal/server/app/api/crypto/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[externals]/express [external] (express, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("express", () => require("express"));

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
"[project]/app/api/crypto/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// contents of file
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const express = __turbopack_context__.r("[externals]/express [external] (express, cjs)");
const router = express.Router();
const mongoose = __turbopack_context__.r("[externals]/mongoose [external] (mongoose, cjs)");
const { Wallet, Transaction } = __turbopack_context__.r("[project]/app/api/models.js [app-route] (ecmascript)");
// Helper to generate a short unique wallet id
function generateWalletId() {
    return 'w_' + Date.now().toString(36) + Math.random().toString(16).slice(2, 8);
}
function jsonError(res, status, message) {
    return res.status(status).json({
        success: false,
        error: message
    });
}
// Create or return existing wallet for a userId
router.post('/create-wallet', async (req, res)=>{
    try {
        const { userId } = req.body || {};
        if (!userId) return jsonError(res, 400, 'userId is required');
        let wallet = await Wallet.findOne({
            userId
        }).lean();
        if (wallet) return res.json({
            success: true,
            wallet
        });
        const walletId = generateWalletId();
        wallet = await Wallet.create({
            walletId,
            userId,
            balance: 0
        });
        return res.json({
            success: true,
            wallet
        });
    } catch (err) {
        console.error('create-wallet error', err);
        return jsonError(res, 500, 'Internal server error');
    }
});
// Get wallet by userId
router.get('/user/:userId', async (req, res)=>{
    try {
        const { userId } = req.params;
        if (!userId) return jsonError(res, 400, 'userId is required');
        const wallet = await Wallet.findOne({
            userId
        }).lean();
        if (!wallet) return jsonError(res, 404, 'Wallet not found');
        return res.json({
            success: true,
            wallet
        });
    } catch (err) {
        console.error('get wallet error', err);
        return jsonError(res, 500, 'Internal server error');
    }
});
// Add balance (system top-up). Records a transaction with senderWalletId='SYSTEM'
router.post('/add-balance', async (req, res)=>{
    try {
        const { walletId, amount } = req.body || {};
        const amt = Number(amount);
        if (!walletId) return jsonError(res, 400, 'walletId is required');
        if (!amt || isNaN(amt) || amt <= 0) return jsonError(res, 400, 'amount must be a positive number');
        // Atomic increment
        const wallet = await Wallet.findOneAndUpdate({
            walletId
        }, {
            $inc: {
                balance: amt
            }
        }, {
            new: true
        }).lean();
        if (!wallet) return jsonError(res, 404, 'Wallet not found');
        // record top-up as coming from SYSTEM
        await Transaction.create({
            senderWalletId: 'SYSTEM',
            receiverWalletId: walletId,
            amount: amt,
            status: 'completed'
        });
        return res.json({
            success: true,
            wallet
        });
    } catch (err) {
        console.error('add-balance error', err);
        return jsonError(res, 500, 'Internal server error');
    }
});
// Transfer from one wallet to another
router.post('/transfer', async (req, res)=>{
    const sessionSupported = typeof mongoose.startSession === 'function';
    const { fromWalletId, toWalletId, amount } = req.body || {};
    const amt = Number(amount);
    if (!fromWalletId || !toWalletId) return jsonError(res, 400, 'fromWalletId and toWalletId are required');
    if (fromWalletId === toWalletId) return jsonError(res, 400, 'fromWalletId and toWalletId must be different');
    if (!amt || isNaN(amt) || amt <= 0) return jsonError(res, 400, 'amount must be a positive number');
    // Use transactions if available
    if (sessionSupported) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            // Decrement sender if sufficient funds
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
                return jsonError(res, 400, 'Insufficient funds or sender not found');
            }
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
                return jsonError(res, 404, 'Receiver wallet not found');
            }
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
            const updatedSender = await Wallet.findOne({
                walletId: fromWalletId
            }).lean();
            const updatedReceiver = await Wallet.findOne({
                walletId: toWalletId
            }).lean();
            return res.json({
                success: true,
                sender: updatedSender,
                receiver: updatedReceiver
            });
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            console.error('transfer error (txn)', err);
            return jsonError(res, 500, 'Transfer failed');
        }
    }
    // Fallback (no transactions): use guarded atomic updates and basic rollback
    try {
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
        if (!sender) return jsonError(res, 400, 'Insufficient funds or sender not found');
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
            // attempt to rollback sender
            await Wallet.findOneAndUpdate({
                walletId: fromWalletId
            }, {
                $inc: {
                    balance: amt
                }
            });
            return jsonError(res, 404, 'Receiver wallet not found; rolled back');
        }
        await Transaction.create({
            senderWalletId: fromWalletId,
            receiverWalletId: toWalletId,
            amount: amt,
            status: 'completed'
        });
        const updatedSender = await Wallet.findOne({
            walletId: fromWalletId
        }).lean();
        const updatedReceiver = await Wallet.findOne({
            walletId: toWalletId
        }).lean();
        return res.json({
            success: true,
            sender: updatedSender,
            receiver: updatedReceiver
        });
    } catch (err) {
        console.error('transfer error (fallback)', err);
        return jsonError(res, 500, 'Transfer failed');
    }
});
// List transactions for a walletId
router.get('/transactions/:walletId', async (req, res)=>{
    try {
        const { walletId } = req.params;
        const limit = Math.min(100, Number(req.query.limit) || 20);
        if (!walletId) return jsonError(res, 400, 'walletId is required');
        const transactions = await Transaction.find({
            $or: [
                {
                    senderWalletId: walletId
                },
                {
                    receiverWalletId: walletId
                }
            ]
        }).sort({
            createdAt: -1
        }).limit(limit).lean();
        return res.json({
            success: true,
            transactions
        });
    } catch (err) {
        console.error('transactions error', err);
        return jsonError(res, 500, 'Internal server error');
    }
});
// Stats for a walletId: balance, totalSent, totalReceived, txCount
router.get('/stats/:walletId', async (req, res)=>{
    try {
        const { walletId } = req.params;
        if (!walletId) return jsonError(res, 400, 'walletId is required');
        const wallet = await Wallet.findOne({
            walletId
        }).lean();
        if (!wallet) return jsonError(res, 404, 'Wallet not found');
        // aggregate totals
        const [sentAgg] = await Transaction.aggregate([
            {
                $match: {
                    senderWalletId: walletId
                }
            },
            {
                $group: {
                    _id: null,
                    totalSent: {
                        $sum: '$amount'
                    },
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);
        const [recvAgg] = await Transaction.aggregate([
            {
                $match: {
                    receiverWalletId: walletId
                }
            },
            {
                $group: {
                    _id: null,
                    totalReceived: {
                        $sum: '$amount'
                    },
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);
        const txCount = (sentAgg && sentAgg.count ? sentAgg.count : 0) + (recvAgg && recvAgg.count ? recvAgg.count : 0);
        return res.json({
            success: true,
            stats: {
                balance: wallet.balance,
                totalSent: sentAgg && sentAgg.totalSent || 0,
                totalReceived: recvAgg && recvAgg.totalReceived || 0,
                txCount
            }
        });
    } catch (err) {
        console.error('stats error', err);
        return jsonError(res, 500, 'Internal server error');
    }
});
const __TURBOPACK__default__export__ = router;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e8745f16._.js.map