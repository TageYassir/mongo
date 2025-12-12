module.exports = [
"[project]/.next-internal/server/app/api/users/online/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/app/api/users/online/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || undefined;
async function PATCH(req) {
    if (!uri) {
        return new Response(JSON.stringify({
            error: "MONGODB_URI not configured"
        }), {
            status: 500
        });
    }
    let body;
    try {
        body = await req.json();
    } catch (e) {
        return new Response(JSON.stringify({
            error: "Invalid JSON"
        }), {
            status: 400
        });
    }
    const { id, email, online } = body;
    if (!id && !email) {
        return new Response(JSON.stringify({
            error: "Provide id or email"
        }), {
            status: 400
        });
    }
    const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    try {
        await client.connect();
        const db = dbName ? client.db(dbName) : client.db();
        const users = db.collection("users");
        const filter = id ? {
            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](id)
        } : {
            email
        };
        const update = {
            $set: {
                online: Boolean(online),
                lastOnlineAt: new Date()
            }
        };
        const result = await users.updateOne(filter, update, {
            upsert: false
        });
        if (result.matchedCount === 0) {
            return new Response(JSON.stringify({
                matched: 0
            }), {
                status: 404
            });
        }
        return new Response(JSON.stringify({
            ok: true
        }), {
            status: 200
        });
    } catch (e) {
        console.error("DB update error:", e);
        return new Response(JSON.stringify({
            error: "Database update failed"
        }), {
            status: 500
        });
    } finally{
        await client.close();
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fa4974d4._.js.map