module.exports = [
"[project]/.next-internal/server/app/api/users/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/app/api/users/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Next Imports */ __turbopack_context__.s([
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
/** Data Models Imports */ var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/models.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
;
;
const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};
function OPTIONS() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 204,
        headers: CORS_HEADERS
    });
}
/** Generate verification/recovery code */ function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
/** Helper: create gmail transporter (keeps same credentials as provided) */ function createTransporter() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
        service: "gmail",
        auth: {
            user: "Fftt7252@gmail.com",
            pass: "soae wjwy yvdz iwwc"
        }
    });
}
async function GET(request) {
    try {
        const operation = request.nextUrl.searchParams.get("operation");
        const q = request.nextUrl.searchParams.get("q") || "";
        // New: check if a pseudo is available
        if (operation === "check-pseudo") {
            const pseudo = (request.nextUrl.searchParams.get("pseudo") || "").trim();
            if (!pseudo) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Missing pseudo"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            const found = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                pseudo
            }).lean();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                available: !Boolean(found)
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "get-all-users") {
            // If a query is provided, perform a case-insensitive search on multiple fields.
            if (q && q.trim() !== "") {
                // Escape regex special chars to avoid unintended regex behavior
                const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                const re = new RegExp(escaped, "i");
                // Search pseudo, firstName, lastName, email
                const users = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].find({
                    $or: [
                        {
                            pseudo: re
                        },
                        {
                            firstName: re
                        },
                        {
                            lastName: re
                        },
                        {
                            email: re
                        }
                    ]
                }).limit(50).lean();
                users.forEach((u)=>{
                    if (u.password) delete u.password;
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    users
                }, {
                    status: 200,
                    headers: CORS_HEADERS
                });
            }
            // No query: return all users (you may want to paginate for large collections)
            const users = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].find().lean();
            users.forEach((u)=>{
                if (u.password) delete u.password;
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                users
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "online") {
            const onlineUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].find({
                isOnline: true
            }).lean();
            onlineUsers.forEach((u)=>{
                if (u.password) delete u.password;
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                users: onlineUsers
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        // Unknown or unsupported GET operation
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unknown or unsupported GET operation"
        }, {
            status: 400,
            headers: CORS_HEADERS
        });
    } catch (error) {
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
        const operation = request.nextUrl.searchParams.get("operation");
        if (operation === "create") {
            const data = await request.json();
            if (!data || !data.email || !data.password) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Missing required fields (email and password)."
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            // Normalize email and pseudo for comparison
            const emailNorm = String(data.email).trim().toLowerCase();
            const pseudoNorm = data.pseudo ? String(data.pseudo).trim() : "";
            // Check for existing user by email OR pseudo
            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                $or: [
                    {
                        email: emailNorm
                    },
                    ...pseudoNorm ? [
                        {
                            pseudo: pseudoNorm
                        }
                    ] : []
                ]
            }).lean();
            if (existing) {
                // Prefer a clear message about which field conflicts
                if (existing.email && existing.email.toLowerCase() === emailNorm) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: "A user with this email already exists."
                    }, {
                        status: 409,
                        headers: CORS_HEADERS
                    });
                }
                if (pseudoNorm && existing.pseudo === pseudoNorm) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: "Pseudo already taken."
                    }, {
                        status: 409,
                        headers: CORS_HEADERS
                    });
                }
                // Generic conflict fallback
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "User already exists."
                }, {
                    status: 409,
                    headers: CORS_HEADERS
                });
            }
            // Create: include validation code and send verification email
            const code = generateCode();
            const toCreate = {
                ...data,
                email: emailNorm,
                validationCode: code
            };
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].create(toCreate);
            const out = created && created.toObject ? created.toObject() : created;
            if (out && out.password) delete out.password;
            // Transport and send verification email
            const transporter = createTransporter();
            await transporter.sendMail({
                from: '"Chocolat Social" <Fftt7252@gmail.com>',
                to: data.email,
                subject: "🔒 Verify Your Email for Chocolat Social",
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Welcome to Chocolat Social!</h2>
            <p>Hi <strong>${data.pseudo || ""}</strong>,</p>
            <p>Thank you for registering. Please use the verification code below to activate your account:</p>
            <div style="margin: 20px 0; text-align: center;">
              <span style="font-size: 24px; font-weight: bold; color: #4caf50; padding: 10px 20px; border: 2px dashed #4caf50; border-radius: 8px;">
                ${code}
              </span>
            </div>
            <p>If you did not register on Chocolat Social, please ignore this email.</p>
            <p style="font-size: 12px; color: #777;">© 2025 Chocolat Social. All rights reserved.</p>
          </div>
        `
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "User created, check your email"
            }, {
                status: 201,
                headers: CORS_HEADERS
            });
        }
        if (operation === "login") {
            const data = await request.json();
            if (!data || !data.email || !data.password) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Missing email or password"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            // NOTE: this repo currently uses plaintext passwords; replace with hashed passwords (bcrypt) later.
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                email: data.email,
                password: data.password
            }).lean();
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Invalid credentials"
                }, {
                    status: 401,
                    headers: CORS_HEADERS
                });
            }
            if (user.password) delete user.password;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                user
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        /**
     * NEW: set-online operation
     * Accepts JSON body { id } or { userId } OR query params ?id=... or ?userId=...
     * Marks user as online and updates lastActive timestamp.
     */ if (operation === "set-online") {
            // resilient parsing: prefer JSON body but fall back to URL search params
            let data = null;
            try {
                data = await request.json().catch(()=>null);
            } catch (e) {
                data = null;
            }
            let id = data?.id || data?.userId || null;
            try {
                const url = new URL(request.url);
                id = id || url.searchParams.get('id') || url.searchParams.get('userId') || null;
            } catch (e) {
            // ignore URL parsing errors
            }
            if (!id) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Missing user id"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findByIdAndUpdate(id, {
                $set: {
                    isOnline: true,
                    lastActive: new Date()
                }
            }, {
                new: true,
                runValidators: true,
                context: 'query'
            }).lean();
            if (!updated) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "User not found"
                }, {
                    status: 404,
                    headers: CORS_HEADERS
                });
            }
            if (updated.password) delete updated.password;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                user: updated
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "logout") {
            // Expect body: { id: "<userObjectId>" }
            const data = await request.json().catch(()=>null);
            const id = data?.id;
            if (!id) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Missing user id"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findByIdAndUpdate(id, {
                isOnline: false
            }, {
                new: true,
                runValidators: true,
                context: 'query'
            }).lean();
            if (!updated) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "User not found"
                }, {
                    status: 404,
                    headers: CORS_HEADERS
                });
            }
            if (updated.password) delete updated.password;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                user: updated
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "update") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                result: null
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "verify-code") {
            // make body parsing resilient and normalize email for lookup
            const data = await request.json().catch(()=>null);
            const email = data?.email ? String(data.email).trim().toLowerCase() : "";
            const code = data?.code ? String(data.code).trim() : "";
            if (!email || !code) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Missing email or code"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                email,
                validationCode: code
            });
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Invalid code"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            user.isValidated = true;
            user.validationCode = null;
            await user.save();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Email verified successfully"
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "recover") {
            const data = await request.json();
            const email = data?.email;
            if (!email) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Missing email"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                email
            });
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Email not found"
                }, {
                    status: 404,
                    headers: CORS_HEADERS
                });
            }
            // Générer code de récupération
            const code = generateCode();
            user.recoveryCode = code;
            await user.save();
            // Envoi email
            const transporter = createTransporter();
            await transporter.sendMail({
                from: '"Chocolat Social" <Fftt7252@gmail.com>',
                to: user.email,
                subject: "Password Recovery Code",
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
            <h2>Password Recovery</h2>
            <p>Your recovery code is:</p>
            <div style="text-align: center; margin: 20px;">
              <span style="font-size: 24px; font-weight: bold; color: #f44336;">${code}</span>
            </div>
            <p>If you did not request a password reset, ignore this email.</p>
          </div>
        `
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Recovery code sent to your email"
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        if (operation === "reset-password") {
            const data = await request.json();
            const { email, code, newPassword } = data || {};
            if (!email || !code || !newPassword) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Missing email, code or newPassword"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].findOne({
                email,
                recoveryCode: code
            });
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Invalid code or email"
                }, {
                    status: 400,
                    headers: CORS_HEADERS
                });
            }
            user.password = newPassword;
            user.recoveryCode = null;
            await user.save();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Password reset successfully"
            }, {
                status: 200,
                headers: CORS_HEADERS
            });
        }
        // Unrecognized operation for POST
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unknown operation"
        }, {
            status: 400,
            headers: CORS_HEADERS
        });
    } catch (error) {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__6a9b0ce9._.js.map