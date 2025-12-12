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
    "Message",
    ()=>Message,
    "Post",
    ()=>Post,
    "User",
    ()=>User,
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
 * Model creation - check existing models to avoid OverwriteModelError
 */ const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("User", userSchema);
const Post = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Post || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Post", postSchema);
const Message = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Message || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Message", messageSchema);
/**
 * Ensure connection is established when this module is imported.
 * Some environments will re-run module code on each request in dev;
 * connectToDatabase caches the promise to prevent multiple connects.
 */ connectToDatabase().catch((err)=>{
    // Log error server-side. In production, handle appropriately.
    console.error("MongoDB connection error:", err);
});
;
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
            // Create: keep the same behavior as before (note: consider hashing passwords)
            const toCreate = {
                ...data,
                email: emailNorm
            };
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"].create(toCreate);
            const out = created && created.toObject ? created.toObject() : created;
            if (out && out.password) delete out.password;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                user: out
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
        if (operation === "recover") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                result: null
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

//# sourceMappingURL=%5Broot-of-the-server%5D__78e3be59._.js.map