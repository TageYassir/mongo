(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/uis/crypto/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CryptoIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CryptoIndex() {
    _s();
    const [connectedUserId, setConnectedUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // detection helpers
    const hasWindow = "object" !== "undefined";
    const hasDocument = typeof document !== "undefined";
    function isBlockedUser(id) {
        if (!id) return false;
        try {
            const s = String(id).trim();
            return s === "691735cf8c82afe3706c8db9";
        } catch (e) {
            return false;
        }
    }
    function getUserIdFromCookie() {
        if (!hasDocument) return null;
        try {
            const m = document.cookie.match(/(?:^|;\s*)userId=([^;]+)/);
            return m ? decodeURIComponent(m[1]) : null;
        } catch (e) {
            return null;
        }
    }
    function getUserIdFromWindow() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            if (window.__USER_ID__) return window.__USER_ID__;
            if (window.__NEXT_DATA__) {
                var _nd_props_pageProps_user, _nd_props_pageProps, _nd_props, _nd_props_pageProps1, _nd_props1, _nd_props_pageProps_user1, _nd_props_pageProps2, _nd_props2;
                const nd = window.__NEXT_DATA__;
                const maybe = ((_nd_props = nd.props) === null || _nd_props === void 0 ? void 0 : (_nd_props_pageProps = _nd_props.pageProps) === null || _nd_props_pageProps === void 0 ? void 0 : (_nd_props_pageProps_user = _nd_props_pageProps.user) === null || _nd_props_pageProps_user === void 0 ? void 0 : _nd_props_pageProps_user.id) || ((_nd_props1 = nd.props) === null || _nd_props1 === void 0 ? void 0 : (_nd_props_pageProps1 = _nd_props1.pageProps) === null || _nd_props_pageProps1 === void 0 ? void 0 : _nd_props_pageProps1.userId) || ((_nd_props2 = nd.props) === null || _nd_props2 === void 0 ? void 0 : (_nd_props_pageProps2 = _nd_props2.pageProps) === null || _nd_props_pageProps2 === void 0 ? void 0 : (_nd_props_pageProps_user1 = _nd_props_pageProps2.user) === null || _nd_props_pageProps_user1 === void 0 ? void 0 : _nd_props_pageProps_user1._id);
                if (maybe) return maybe;
            }
            if (window.app && window.app.currentUser) {
                return window.app.currentUser.id || window.app.currentUser.userId || window.app.currentUser._id || null;
            }
        } catch (e) {
        // ignore
        }
        return null;
    }
    function getUserIdFromStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const keys = [
                "connectedUserId",
                "userId",
                "currentUserId"
            ];
            for (const k of keys){
                try {
                    const raw = localStorage.getItem(k) || sessionStorage.getItem(k);
                    if (raw) return raw;
                } catch (e) {}
            }
            try {
                const rawUser = localStorage.getItem("user") || sessionStorage.getItem("user");
                if (rawUser) {
                    const parsed = JSON.parse(rawUser);
                    return (parsed === null || parsed === void 0 ? void 0 : parsed.id) || (parsed === null || parsed === void 0 ? void 0 : parsed._id) || (parsed === null || parsed === void 0 ? void 0 : parsed.userId) || null;
                }
            } catch (e) {}
            for(let i = 0; i < localStorage.length; i++){
                const key = localStorage.key(i);
                if (!key) continue;
                if (/user/i.test(key) || /auth/i.test(key)) {
                    try {
                        const raw = localStorage.getItem(key);
                        if (!raw) continue;
                        if (raw.trim().startsWith("{")) {
                            const parsed = JSON.parse(raw);
                            const maybe = (parsed === null || parsed === void 0 ? void 0 : parsed.id) || (parsed === null || parsed === void 0 ? void 0 : parsed._id) || (parsed === null || parsed === void 0 ? void 0 : parsed.userId);
                            if (maybe) return maybe;
                        } else if (raw.length > 5) {
                            return raw;
                        }
                    } catch (e) {}
                }
            }
        } catch (e) {
        // storage not available
        }
        return null;
    }
    async function fetchUserFromRoute() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const tries = [
            "/api/auth/me",
            "/api/users?operation=get-current",
            "/api/users?operation=get-current-user",
            "/api/user",
            "/api/me"
        ];
        for (const p of tries){
            try {
                var _json_user, _json_user1;
                const res = await fetch(p, {
                    credentials: "same-origin"
                });
                if (!res.ok) continue;
                const json = await res.json().catch(()=>null);
                const maybe = (json === null || json === void 0 ? void 0 : (_json_user = json.user) === null || _json_user === void 0 ? void 0 : _json_user._id) || (json === null || json === void 0 ? void 0 : (_json_user1 = json.user) === null || _json_user1 === void 0 ? void 0 : _json_user1.id) || (json === null || json === void 0 ? void 0 : json.id) || (json === null || json === void 0 ? void 0 : json.userId) || null;
                if (maybe) return maybe;
            } catch (e) {}
        }
        return null;
    }
    // central detection function
    async function detectConnectedUserId() {
        const cookie = getUserIdFromCookie();
        if (cookie) {
            if (isBlockedUser(cookie)) return null;
            return String(cookie);
        }
        const w = getUserIdFromWindow();
        if (w) {
            if (isBlockedUser(w)) return null;
            return String(w);
        }
        const s = getUserIdFromStorage();
        if (s) {
            if (isBlockedUser(s)) return null;
            return String(s);
        }
        try {
            const fromApi = await fetchUserFromRoute();
            if (fromApi) {
                if (isBlockedUser(fromApi)) return null;
                return String(fromApi);
            }
        } catch (e) {}
        return null;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoIndex.useEffect": ()=>{
            mountedRef.current = true;
            let canceled = false;
            ({
                "CryptoIndex.useEffect": async ()=>{
                    const id = await detectConnectedUserId();
                    if (canceled) return;
                    if (id && !isBlockedUser(id)) setConnectedUserId(String(id));
                    else setConnectedUserId(null);
                }
            })["CryptoIndex.useEffect"]();
            function onStorage(e) {
                try {
                    var _e_key;
                    if (!e) return;
                    if (e.key === "connectedUserId" || e.key === "userId" || e.key === "user" || ((_e_key = e.key) === null || _e_key === void 0 ? void 0 : _e_key.startsWith("auth")) || e.key === "user-logout-ts") {
                        setTimeout({
                            "CryptoIndex.useEffect.onStorage": async ()=>{
                                if (!mountedRef.current) return;
                                const id = await detectConnectedUserId();
                                if (id && !isBlockedUser(id)) setConnectedUserId(String(id));
                                else setConnectedUserId(null);
                            }
                        }["CryptoIndex.useEffect.onStorage"], 120);
                    }
                } catch (err) {}
            }
            try {
                window.addEventListener("storage", onStorage);
            } catch (e) {}
            return ({
                "CryptoIndex.useEffect": ()=>{
                    canceled = true;
                    mountedRef.current = false;
                    try {
                        window.removeEventListener("storage", onStorage);
                    } catch (e) {}
                }
            })["CryptoIndex.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CryptoIndex.useEffect"], []);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // new: mobile detection
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoIndex.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const check = {
                "CryptoIndex.useEffect.check": ()=>setIsMobile(window.innerWidth <= 640)
            }["CryptoIndex.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "CryptoIndex.useEffect": ()=>window.removeEventListener("resize", check)
            })["CryptoIndex.useEffect"];
        }
    }["CryptoIndex.useEffect"], []);
    // Normalize server transaction to UI-friendly shape
    function normalizeTransaction(t) {
        const id = t.id || t._id || t._id && String(t._id) || null;
        const sentAt = t.sentAt || t.sent_at || t.createdAt || t.created_at || t.date || t.timestamp || null;
        const dateISO = sentAt ? new Date(sentAt).toISOString() : null;
        const fromId = t.fromId || t.senderWalletId || t.sender || t.from || t.from_wallet || null;
        const toId = t.toId || t.receiverWalletId || t.receiver || t.to || t.to_wallet || null;
        const amount = typeof t.amount === "number" ? t.amount : Number(t.amount || 0);
        return {
            raw: t,
            id,
            date: dateISO,
            fromId,
            toId,
            amount,
            status: t.status || t.state || null
        };
    }
    // fetch and return normalized array
    async function fetchAllTransactions(userId) {
        async function tryFetchJson(path) {
            try {
                const res = await fetch(path, {
                    credentials: "same-origin"
                });
                if (!res.ok) {
                    // try to parse body for debugging messages but return null for data
                    try {
                        await res.json().catch(()=>null);
                    } catch (_) {}
                    return null;
                }
                return await res.json().catch(()=>null);
            } catch (e) {
                return null;
            }
        }
        // Build candidate endpoints widely (covers common variants)
        const candidates = [];
        // If userId present, try endpoints that accept userId
        if (userId) {
            candidates.push("/api/crypto/transactions?userId=".concat(encodeURIComponent(userId)), "/api/crypto/transactions/".concat(encodeURIComponent(userId)), "/api/transactions?userId=".concat(encodeURIComponent(userId)), "/api/transactions/".concat(encodeURIComponent(userId)), "/api/wallets/transactions/".concat(encodeURIComponent(userId)), "/api/wallets/transactions?walletId=".concat(encodeURIComponent(userId)), "/api/transactions?walletId=".concat(encodeURIComponent(userId)), "/api/crypto?operation=get-transactions&userId=".concat(encodeURIComponent(userId)));
        }
        // Try wallet discovery first (many backends store transactions linked to wallets)
        if (userId) {
            const walletLookupCandidates = [
                "/api/crypto/user/".concat(encodeURIComponent(userId)),
                "/api/crypto/wallets?userId=".concat(encodeURIComponent(userId)),
                "/api/wallets?userId=".concat(encodeURIComponent(userId)),
                "/api/wallets/user/".concat(encodeURIComponent(userId)),
                "/api/users/".concat(encodeURIComponent(userId), "/wallets")
            ];
            for (const p of walletLookupCandidates){
                const walletJson = await tryFetchJson(p);
                if (!walletJson) continue;
                const walletObj = (walletJson === null || walletJson === void 0 ? void 0 : walletJson.wallet) || Array.isArray(walletJson) && walletJson[0] || (walletJson === null || walletJson === void 0 ? void 0 : walletJson.data) || (walletJson === null || walletJson === void 0 ? void 0 : walletJson.wallets) || null;
                const walletId = (walletObj === null || walletObj === void 0 ? void 0 : walletObj.walletId) || (walletObj === null || walletObj === void 0 ? void 0 : walletObj._id) || (walletObj === null || walletObj === void 0 ? void 0 : walletObj.id) || null;
                if (walletId) {
                    // try transaction endpoints for that walletId
                    const txPaths = [
                        "/api/wallets/transactions/".concat(encodeURIComponent(walletId)),
                        "/api/transactions/".concat(encodeURIComponent(walletId)),
                        "/api/transactions?walletId=".concat(encodeURIComponent(walletId)),
                        "/api/crypto/wallets/".concat(encodeURIComponent(walletId), "/transactions"),
                        "/api/crypto/wallets/transactions/".concat(encodeURIComponent(walletId)),
                        "/api/crypto/transactions/".concat(encodeURIComponent(walletId))
                    ];
                    for (const tp of txPaths){
                        const txJson = await tryFetchJson(tp);
                        if (!txJson) continue;
                        const list = Array.isArray(txJson) ? txJson : (txJson === null || txJson === void 0 ? void 0 : txJson.transactions) || (txJson === null || txJson === void 0 ? void 0 : txJson.data) || (txJson === null || txJson === void 0 ? void 0 : txJson.items) || (txJson === null || txJson === void 0 ? void 0 : txJson.transactionsData) || null;
                        if (Array.isArray(list)) return list.map(normalizeTransaction);
                    }
                }
            }
        }
        // Generic candidates (global transactions or alternative endpoints)
        candidates.push("/api/crypto/transactions", "/api/crypto?operation=get-transactions", "/api/crypto?operation=get-transactions&limit=100", "/api/transactions", "/api/txs", "/api/transactions/all", "/api/transactions?limit=100");
        // Also include direct wallet-like candidates even when userId is not present
        candidates.push("/api/wallets/transactions", "/api/wallets/transactions?limit=100", "/api/crypto");
        // Walk candidate endpoints until we find an array
        for (const p of candidates){
            const json = await tryFetchJson(p);
            if (!json) continue;
            const list = Array.isArray(json) ? json : (json === null || json === void 0 ? void 0 : json.transactions) || (json === null || json === void 0 ? void 0 : json.data) || (json === null || json === void 0 ? void 0 : json.items) || (json === null || json === void 0 ? void 0 : json.txs) || (json === null || json === void 0 ? void 0 : json.rows) || null;
            if (Array.isArray(list)) {
                return list.map(normalizeTransaction);
            }
            // Some backends return { success: true, data: [...] }
            if (json && Array.isArray(json.data)) return json.data.map(normalizeTransaction);
        }
        // nothing found
        return [];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoIndex.useEffect": ()=>{
            let canceled = false;
            ({
                "CryptoIndex.useEffect": async ()=>{
                    // we allow fetch even if connectedUserId is null (global transactions)
                    if (!mountedRef.current) mountedRef.current = true;
                    setLoading(true);
                    setError(null);
                    try {
                        const txs = await fetchAllTransactions(connectedUserId);
                        if (canceled) return;
                        setTransactions(txs);
                    } catch (err) {
                        if (!canceled) setError("Failed to load transactions");
                        console.error("fetch transactions error:", err);
                    } finally{
                        if (!canceled) setLoading(false);
                    }
                }
            })["CryptoIndex.useEffect"]();
            return ({
                "CryptoIndex.useEffect": ()=>{
                    canceled = true;
                }
            })["CryptoIndex.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CryptoIndex.useEffect"], [
        connectedUserId
    ]);
    function refresh() {
        (async ()=>{
            setLoading(true);
            setError(null);
            try {
                const txs = await fetchAllTransactions(connectedUserId);
                setTransactions(txs);
            } catch (e) {
                setError("Failed to refresh transactions");
                console.error("refresh error:", e);
            } finally{
                setLoading(false);
            }
        })();
    }
    function formatDate(iso) {
        if (!iso) return "-";
        try {
            const d = new Date(iso);
            return d.toLocaleString();
        } catch (e) {
            return iso;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: isMobile ? 16 : 24,
            fontFamily: "Arial, sans-serif",
            maxWidth: 900,
            margin: '0 auto',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    margin: 0,
                    fontSize: isMobile ? 18 : 22
                },
                children: "Wallet Transactions"
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/page.js",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#666",
                    marginTop: 8,
                    fontSize: isMobile ? 13 : 14
                },
                children: "Showing transactions. The page will attempt many common API paths to locate transactions."
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/page.js",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16,
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "wrap"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginLeft: isMobile ? 0 : "auto",
                        display: "flex",
                        gap: 8,
                        flexDirection: isMobile ? 'column' : 'row',
                        width: isMobile ? '100%' : 'auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (connectedUserId) {
                                    router.push("/uis/crypto/".concat(encodeURIComponent(String(connectedUserId))));
                                } else {
                                    router.push("/uis/crypto/new");
                                }
                            },
                            style: {
                                padding: "8px 12px",
                                borderRadius: 6,
                                border: "1px solid #1976d2",
                                background: "#1976d2",
                                color: "#fff",
                                cursor: "pointer",
                                fontWeight: 600,
                                width: isMobile ? '100%' : 'auto'
                            },
                            title: connectedUserId ? "Create transaction for ".concat(connectedUserId) : "Create transaction",
                            children: "Add Transaction"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/crypto/page.js",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: refresh,
                            style: {
                                padding: "8px 12px",
                                borderRadius: 6,
                                border: "1px solid #ddd",
                                background: "#fff",
                                cursor: "pointer",
                                width: isMobile ? '100%' : 'auto'
                            },
                            title: "Refresh transactions",
                            children: "Refresh"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/crypto/page.js",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/crypto/page.js",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/page.js",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16,
                    border: "1px solid #eee",
                    padding: isMobile ? 10 : 12,
                    borderRadius: 6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 12
                    },
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "#666"
                        },
                        children: "Loading transactions..."
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/page.js",
                        lineNumber: 423,
                        columnNumber: 13
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "red"
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/page.js",
                        lineNumber: 425,
                        columnNumber: 13
                    }, this) : transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "#777"
                        },
                        children: "No transactions available."
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/page.js",
                        lineNumber: 427,
                        columnNumber: 13
                    }, this) : // responsive: table on desktop, stacked cards on mobile
                    isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        },
                        children: transactions.map((t)=>{
                            const date = formatDate(t.date);
                            const from = t.fromId || "-";
                            const to = t.toId || "-";
                            const amount = Number(t.amount || 0).toFixed(2);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#fff',
                                    padding: 10,
                                    borderRadius: 8,
                                    boxShadow: '0 0 0 1px #f3f3f3 inset'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                minWidth: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 700,
                                                        fontSize: 14
                                                    },
                                                    children: [
                                                        amount,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: 500,
                                                                color: '#666'
                                                            },
                                                            children: "USD"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/uis/crypto/page.js",
                                                            lineNumber: 441,
                                                            columnNumber: 83
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/uis/crypto/page.js",
                                                    lineNumber: 441,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 13,
                                                        color: '#444',
                                                        marginTop: 6
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                whiteSpace: 'nowrap',
                                                                textOverflow: 'ellipsis',
                                                                overflow: 'hidden'
                                                            },
                                                            children: [
                                                                "From: ",
                                                                from
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/uis/crypto/page.js",
                                                            lineNumber: 443,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                whiteSpace: 'nowrap',
                                                                textOverflow: 'ellipsis',
                                                                overflow: 'hidden'
                                                            },
                                                            children: [
                                                                "To: ",
                                                                to
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/uis/crypto/page.js",
                                                            lineNumber: 444,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/uis/crypto/page.js",
                                                    lineNumber: 442,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/crypto/page.js",
                                            lineNumber: 440,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'right',
                                                minWidth: 92
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: t.status === 'ok' ? '#064' : '#a33',
                                                        fontWeight: 600
                                                    },
                                                    children: t.status || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/page.js",
                                                    lineNumber: 448,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: '#888',
                                                        marginTop: 6
                                                    },
                                                    children: date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/page.js",
                                                    lineNumber: 449,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/crypto/page.js",
                                            lineNumber: 447,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/uis/crypto/page.js",
                                    lineNumber: 439,
                                    columnNumber: 23
                                }, this)
                            }, t.id || "".concat(from, "-").concat(to, "-").concat(t.date), false, {
                                fileName: "[project]/app/uis/crypto/page.js",
                                lineNumber: 438,
                                columnNumber: 21
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/page.js",
                        lineNumber: 431,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflowX: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: "100%",
                                borderCollapse: "collapse",
                                fontSize: 14
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            textAlign: "left",
                                            borderBottom: "1px solid #eee"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    padding: "8px 6px"
                                                },
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/app/uis/crypto/page.js",
                                                lineNumber: 461,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    padding: "8px 6px"
                                                },
                                                children: "From Wallet"
                                            }, void 0, false, {
                                                fileName: "[project]/app/uis/crypto/page.js",
                                                lineNumber: 462,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    padding: "8px 6px"
                                                },
                                                children: "To Wallet"
                                            }, void 0, false, {
                                                fileName: "[project]/app/uis/crypto/page.js",
                                                lineNumber: 463,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    padding: "8px 6px"
                                                },
                                                children: "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/app/uis/crypto/page.js",
                                                lineNumber: 464,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/uis/crypto/page.js",
                                        lineNumber: 460,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/crypto/page.js",
                                    lineNumber: 459,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: transactions.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                borderBottom: "1px solid #fafafa"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "8px 6px",
                                                        color: "#555"
                                                    },
                                                    children: formatDate(t.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/page.js",
                                                    lineNumber: 470,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "8px 6px"
                                                    },
                                                    children: t.fromId || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/page.js",
                                                    lineNumber: 471,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "8px 6px"
                                                    },
                                                    children: t.toId || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/page.js",
                                                    lineNumber: 472,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "8px 6px",
                                                        fontWeight: 600
                                                    },
                                                    children: Number(t.amount || 0).toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/page.js",
                                                    lineNumber: 473,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, t.id || "".concat(t.fromId, "-").concat(t.toId, "-").concat(t.date), true, {
                                            fileName: "[project]/app/uis/crypto/page.js",
                                            lineNumber: 469,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/crypto/page.js",
                                    lineNumber: 467,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/uis/crypto/page.js",
                            lineNumber: 458,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/page.js",
                        lineNumber: 457,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/uis/crypto/page.js",
                    lineNumber: 421,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/page.js",
                lineNumber: 420,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/crypto/page.js",
        lineNumber: 366,
        columnNumber: 5
    }, this);
}
_s(CryptoIndex, "F/wOVZVfOsUQT5c1o3l55ZIohjo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CryptoIndex;
var _c;
__turbopack_context__.k.register(_c, "CryptoIndex");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_uis_crypto_page_82358f9c.js.map