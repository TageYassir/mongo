module.exports = [
"[project]/.next-internal/server/app/api/friends/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
 * - text: String (optional)
 * - sentAt: Date
 * - attachments: array of files { type, url, filename, size, mimeType }
 */ const attachmentSubSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    _id: false,
    type: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    filename: {
        type: String
    },
    size: {
        type: Number
    },
    mimeType: {
        type: String
    }
}, {
    _id: false
});
const messageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
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
        required: false,
        default: ""
    },
    sentAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    attachments: {
        type: [
            attachmentSubSchema
        ],
        default: []
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
"[project]/app/api/friends/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Next Imports */ __turbopack_context__.s([
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
/** Data Models Imports */ var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/models.js [app-route] (ecmascript)");
;
;
;
const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};
function OPTIONS() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 204,
        headers: CORS_HEADERS
    });
}
async function GET(request) {
    try {
        const operation = request.nextUrl.searchParams.get("operation");
        if (operation === "get-invitations") {
            const userId = request.nextUrl.searchParams.get("userId");
            if (!userId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing userId"
            }, {
                status: 400,
                headers: CORS_HEADERS
            });
            const invites = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Friend"].find({
                receiverId: userId,
                status: "pending"
            }).sort({
                createdAt: -1
            }).populate("senderId", "pseudo firstName lastName email").lean();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                invitations: invites || []
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "get-friends") {
            const userId = request.nextUrl.searchParams.get("userId");
            if (!userId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing userId"
            }, {
                status: 400,
                headers: CORS_HEADERS
            });
            // Find all accepted friendships where user is either sender or receiver
            const friends = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Friend"].find({
                status: "accepted",
                $or: [
                    {
                        senderId: userId
                    },
                    {
                        receiverId: userId
                    }
                ]
            }).lean();
            // Map to the "other" user and populate their basic info
            const otherIds = friends.map((f)=>String(f.senderId) === String(userId) ? f.receiverId : f.senderId);
            const uniqueIds = Array.from(new Set(otherIds.map(String)));
            const users = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].find({
                _id: {
                    $in: uniqueIds
                }
            }, "pseudo firstName lastName email").lean();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                friends: users || []
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "get-relationship") {
            const userA = request.nextUrl.searchParams.get("userA");
            const userB = request.nextUrl.searchParams.get("userB");
            if (!userA || !userB) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing userA or userB"
            }, {
                status: 400,
                headers: CORS_HEADERS
            });
            const rel = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Friend"].findOne({
                $or: [
                    {
                        senderId: userA,
                        receiverId: userB
                    },
                    {
                        senderId: userB,
                        receiverId: userA
                    }
                ]
            }).lean();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                relationship: rel || null
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unknown or unsupported GET operation"
        }, {
            status: 400,
            headers: CORS_HEADERS
        });
    } catch (error) {
        console.error("GET /api/friends error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || String(error)
        }, {
            status: 500,
            headers: CORS_HEADERS
        });
    }
}
async function POST(request) {
    try {
        const data = await request.json();
        if (!data || !data.senderId || !data.receiverId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing senderId or receiverId"
            }, {
                status: 400,
                headers: CORS_HEADERS
            });
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Types.ObjectId.isValid(data.senderId) || !__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Types.ObjectId.isValid(data.receiverId)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid ObjectId format"
            }, {
                status: 400,
                headers: CORS_HEADERS
            });
        }
        if (String(data.senderId) === String(data.receiverId)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Cannot send friend request to yourself"
            }, {
                status: 400,
                headers: CORS_HEADERS
            });
        }
        // Check existing
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Friend"].findOne({
            $or: [
                {
                    senderId: data.senderId,
                    receiverId: data.receiverId
                },
                {
                    senderId: data.receiverId,
                    receiverId: data.senderId
                }
            ]
        });
        if (existing) {
            if (existing.status === "accepted") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "You are already friends"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            // If refused or pending, update sender/receiver and set to pending
            existing.senderId = data.senderId;
            existing.receiverId = data.receiverId;
            existing.status = "pending";
            await existing.save();
            // Populate before returning so client always receives sender info
            await existing.populate({
                path: "senderId",
                select: "pseudo firstName lastName"
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                request: existing
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        const fr = new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Friend"]({
            senderId: data.senderId,
            receiverId: data.receiverId,
            status: "pending"
        });
        await fr.save();
        // Modern Mongoose (v6+) returns a promise from populate; execPopulate() was removed.
        // Populate senderId on the saved document and return it.
        await fr.populate({
            path: "senderId",
            select: "pseudo firstName lastName"
        });
        const saved = fr;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            request: saved
        }, {
            status: 201,
            headers: CORS_HEADERS
        });
    } catch (error) {
        console.error("POST /api/friends error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || String(error)
        }, {
            status: 500,
            headers: CORS_HEADERS
        });
    }
}
async function PATCH(request) {
    try {
        const data = await request.json();
        if (!data || !data.requestId || !data.action) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing requestId or action"
            }, {
                status: 400,
                headers: CORS_HEADERS
            });
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Types.ObjectId.isValid(data.requestId)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid requestId"
            }, {
                status: 400,
                headers: CORS_HEADERS
            });
        }
        const fr = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Friend"].findById(data.requestId);
        if (!fr) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Friend request not found"
            }, {
                status: 404,
                headers: CORS_HEADERS
            });
        }
        if (data.action === "accept") {
            fr.status = "accepted";
            await fr.save();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                request: fr
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (data.action === "refuse") {
            fr.status = "refused";
            await fr.save();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                request: fr
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unknown action"
        }, {
            status: 400,
            headers: CORS_HEADERS
        });
    } catch (error) {
        console.error("PATCH /api/friends error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || String(error)
        }, {
            status: 500,
            headers: CORS_HEADERS
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d206c214._.js.map