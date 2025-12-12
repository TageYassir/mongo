(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/uis/crypto/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CryptoDetailSimple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CryptoDetailSimple() {
    _s();
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [wallet, setWallet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recipient, setRecipient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasWindow = "object" !== 'undefined';
    const hasDocument = typeof document !== 'undefined';
    const COOKIE_KEY = 'userId';
    // small resilient API helpers
    async function tryFetchJson(path) {
        let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        try {
            const res = await fetch(path, {
                credentials: 'same-origin',
                ...opts
            });
            if (!res.ok) return null;
            return await res.json().catch(()=>null);
        } catch (e) {
            return null;
        }
    }
    async function tryPostJson(path, body) {
        try {
            const res = await fetch(path, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!res.ok) return null;
            return await res.json().catch(()=>null);
        } catch (e) {
            return null;
        }
    }
    // simple detection heuristics (cookie / window globals / localStorage)
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
                return ((_nd_props = nd.props) === null || _nd_props === void 0 ? void 0 : (_nd_props_pageProps = _nd_props.pageProps) === null || _nd_props_pageProps === void 0 ? void 0 : (_nd_props_pageProps_user = _nd_props_pageProps.user) === null || _nd_props_pageProps_user === void 0 ? void 0 : _nd_props_pageProps_user.id) || ((_nd_props1 = nd.props) === null || _nd_props1 === void 0 ? void 0 : (_nd_props_pageProps1 = _nd_props1.pageProps) === null || _nd_props_pageProps1 === void 0 ? void 0 : _nd_props_pageProps1.userId) || ((_nd_props2 = nd.props) === null || _nd_props2 === void 0 ? void 0 : (_nd_props_pageProps2 = _nd_props2.pageProps) === null || _nd_props_pageProps2 === void 0 ? void 0 : (_nd_props_pageProps_user1 = _nd_props_pageProps2.user) === null || _nd_props_pageProps_user1 === void 0 ? void 0 : _nd_props_pageProps_user1._id) || null;
            }
            if (window.app && window.app.currentUser) {
                return window.app.currentUser.id || window.app.currentUser.userId || null;
            }
        } catch (e) {}
        return null;
    }
    // Prefer explicit authenticated user objects saved by the login page.
    // Look for JSON objects first (user, currentUser, auth, appUser), then simple keys.
    function getUserIdFromStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const jsonKeys = [
                'user',
                'currentUser',
                'auth',
                'appUser'
            ];
            for (const k of jsonKeys){
                try {
                    const raw = localStorage.getItem(k) || sessionStorage.getItem(k);
                    if (raw && raw.trim().startsWith('{')) {
                        try {
                            var _p_user, _p_user1;
                            const p = JSON.parse(raw);
                            const id = (p === null || p === void 0 ? void 0 : p.id) || (p === null || p === void 0 ? void 0 : p._id) || (p === null || p === void 0 ? void 0 : p.userId) || (p === null || p === void 0 ? void 0 : (_p_user = p.user) === null || _p_user === void 0 ? void 0 : _p_user.id) || (p === null || p === void 0 ? void 0 : (_p_user1 = p.user) === null || _p_user1 === void 0 ? void 0 : _p_user1._id) || null;
                            if (id) return String(id);
                        } catch (e) {}
                    }
                } catch (e) {}
            }
            // fallback to simple stored ids
            const keys = [
                'userId',
                'connectedUserId',
                'currentUserId'
            ];
            for (const k of keys){
                try {
                    const v = localStorage.getItem(k) || sessionStorage.getItem(k);
                    if (v) return v;
                } catch (e) {}
            }
        } catch (e) {}
        return null;
    }
    // find wallet by walletId — ONLY try server APIs now (removed localStorage scan)
    async function findWalletByWalletId(walletId) {
        if (!walletId) return null;
        const candidates = [
            "/api/crypto/wallets/".concat(encodeURIComponent(walletId)),
            "/api/crypto/wallet/".concat(encodeURIComponent(walletId)),
            "/api/crypto/by-wallet-id/".concat(encodeURIComponent(walletId)),
            "/api/crypto?walletId=".concat(encodeURIComponent(walletId)),
            "/api/wallets/".concat(encodeURIComponent(walletId)),
            "/api/wallets/by-wallet-id/".concat(encodeURIComponent(walletId)),
            "/api/wallets/wallet/".concat(encodeURIComponent(walletId)),
            "/api/wallets?walletId=".concat(encodeURIComponent(walletId))
        ];
        for (const p of candidates){
            try {
                const json = await tryFetchJson(p);
                if (!json) continue;
                const wallet = (json === null || json === void 0 ? void 0 : json.wallet) || (json === null || json === void 0 ? void 0 : json.data) || (typeof json === 'object' && !Array.isArray(json) ? json : null);
                if (wallet && (wallet.walletId || wallet.id || wallet._id)) {
                    return {
                        key: null,
                        wallet
                    };
                }
            } catch (e) {}
        }
        return null;
    }
    // load connected user and wallet on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoDetailSimple.useEffect": ()=>{
            let mounted = true;
            ({
                "CryptoDetailSimple.useEffect": async ()=>{
                    // prefer authenticated storage (login page). fall back to window/cookie heuristics.
                    const fromStorage = getUserIdFromStorage();
                    const fromWindow = getUserIdFromWindow();
                    const fromCookie = getUserIdFromCookie();
                    const detected = fromStorage || fromWindow || fromCookie || null;
                    if (!mounted) return;
                    if (detected) {
                        setUserId(String(detected));
                    // stop persisting detected id into localStorage — removed local write
                    } else {
                        setUserId(null);
                    }
                    if (detected) {
                        // attempt to load the wallet from server APIs first (try /api/crypto first)
                        setLoading(true);
                        let loaded = null;
                        try {
                            const pCandidates = [
                                "/api/crypto/user/".concat(encodeURIComponent(String(detected))),
                                "/api/crypto/wallets/user/".concat(encodeURIComponent(String(detected))),
                                "/api/crypto/user-wallets/".concat(encodeURIComponent(String(detected))),
                                "/api/crypto/wallets?userId=".concat(encodeURIComponent(String(detected))),
                                "/api/wallets/user/".concat(encodeURIComponent(String(detected))),
                                "/api/wallet/user/".concat(encodeURIComponent(String(detected))),
                                "/api/users/".concat(encodeURIComponent(String(detected)), "/wallets"),
                                "/api/wallets?userId=".concat(encodeURIComponent(String(detected)))
                            ];
                            for (const p of pCandidates){
                                const json = await tryFetchJson(p);
                                if (!json) continue;
                                // shapes: { wallet }, { wallets: [...] }, array
                                const walletObj = (json === null || json === void 0 ? void 0 : json.wallet) || Array.isArray(json) && json[0] || (json === null || json === void 0 ? void 0 : json.data) || (json === null || json === void 0 ? void 0 : json.wallets) || null;
                                if (walletObj) {
                                    const w = walletObj.walletId ? walletObj : {
                                        ...walletObj,
                                        walletId: walletObj.walletId || walletObj.id || walletObj._id
                                    };
                                    loaded = w;
                                    break;
                                }
                            }
                        } catch (e) {} finally{
                            setLoading(false);
                        }
                        if (loaded) {
                            setWallet(loaded);
                        } else {
                            // Do not fall back to localStorage; rely on DB. Show null wallet if not found.
                            setWallet(null);
                        }
                    }
                }
            })["CryptoDetailSimple.useEffect"]();
            return ({
                "CryptoDetailSimple.useEffect": ()=>{
                    mounted = false;
                }
            })["CryptoDetailSimple.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CryptoDetailSimple.useEffect"], []);
    // create wallet (use server only; do not persist to localStorage)
    async function handleCreateWallet() {
        if (!userId) {
            setMessage({
                type: 'error',
                text: 'No connected user detected.'
            });
            return;
        }
        setMessage(null);
        setLoading(true);
        // try server create endpoints first (and check exist)
        try {
            const existChecks = [
                "/api/crypto/wallets?userId=".concat(encodeURIComponent(userId)),
                "/api/crypto/user/".concat(encodeURIComponent(userId)),
                "/api/crypto/wallets/user/".concat(encodeURIComponent(userId)),
                "/api/wallets/user/".concat(encodeURIComponent(userId)),
                "/api/wallet/user/".concat(encodeURIComponent(userId)),
                "/api/wallets?userId=".concat(encodeURIComponent(userId))
            ];
            for (const p of existChecks){
                const j = await tryFetchJson(p);
                const existing = (j === null || j === void 0 ? void 0 : j.wallet) || Array.isArray(j) && j[0] || (j === null || j === void 0 ? void 0 : j.data) || null;
                if (existing) {
                    const normalized = existing.walletId ? existing : {
                        ...existing,
                        walletId: existing.walletId || existing.id || existing._id
                    };
                    setWallet(normalized);
                    setMessage({
                        type: 'info',
                        text: 'You already have a wallet (from server).'
                    });
                    setLoading(false);
                    return;
                }
            }
            const createCandidates = [
                '/api/crypto/create-wallet',
                '/api/crypto/wallets/create-wallet',
                '/api/crypto/wallets',
                '/api/crypto/wallet/create',
                '/api/wallets/create-wallet',
                '/api/wallets',
                '/api/wallet/create'
            ];
            for (const p of createCandidates){
                const resp = await tryPostJson(p, {
                    userId
                });
                const newWallet = (resp === null || resp === void 0 ? void 0 : resp.wallet) || (resp === null || resp === void 0 ? void 0 : resp.data) || resp || null;
                if (newWallet && (newWallet.walletId || newWallet.id || newWallet._id)) {
                    const normalized = newWallet.walletId ? newWallet : {
                        ...newWallet,
                        walletId: newWallet.walletId || newWallet.id || newWallet._id
                    };
                    // verify persistence by fetching from server by walletId or userId
                    let verified = null;
                    try {
                        if (normalized.walletId) {
                            verified = await tryFetchJson("/api/crypto/wallets/".concat(encodeURIComponent(normalized.walletId)));
                            if (verified && verified.wallet) verified = verified.wallet;
                        }
                        if (!verified) {
                            // try user lookup
                            verified = await tryFetchJson("/api/crypto/user/".concat(encodeURIComponent(userId)));
                            if (verified && verified.wallet) verified = verified.wallet;
                        }
                        if (!verified) {
                            verified = await tryFetchJson("/api/wallets/user/".concat(encodeURIComponent(userId)));
                            if (verified && verified.wallet) verified = verified.wallet;
                        }
                    } catch (e) {
                        verified = null;
                    }
                    if (verified && (verified.walletId || verified.id || verified._id)) {
                        const v = verified.walletId ? verified : {
                            ...verified,
                            walletId: verified.walletId || verified.id || verified._id
                        };
                        setWallet(v);
                        setMessage({
                            type: 'success',
                            text: "Wallet created and verified in DB (balance ".concat(Number(v.balance || 0), ").")
                        });
                        setLoading(false);
                        return;
                    } else {
                        // created but could not verify persistence
                        setWallet(normalized);
                        setMessage({
                            type: 'warning',
                            text: "Wallet created but verification failed — it may not have been saved to DB."
                        });
                        setLoading(false);
                        return;
                    }
                }
            }
        } catch (e) {
        // fall through to final error below
        } finally{
            setLoading(false);
        }
        // If we reach here, server creation failed — do not create a local-only wallet
        setMessage({
            type: 'error',
            text: 'Could not create wallet on server. Ensure API/DB is available.'
        });
    }
    // copy wallet id to clipboard (with fallback)
    async function handleCopyWalletId() {
        if (!wallet || !wallet.walletId) return;
        try {
            if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(String(wallet.walletId));
            } else if (typeof document !== 'undefined') {
                const ta = document.createElement('textarea');
                ta.value = String(wallet.walletId);
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (e) {
            setMessage({
                type: 'error',
                text: 'Copy failed.'
            });
        }
    }
    // perform send using server APIs only (no local fallback)
    async function handleSend() {
        setMessage(null);
        setLoading(true);
        if (!wallet || !wallet.walletId) {
            setLoading(false);
            setMessage({
                type: 'error',
                text: 'Create a wallet first.'
            });
            return;
        }
        const amt = Number(amount);
        if (!recipient || !amt || amt <= 0) {
            setLoading(false);
            setMessage({
                type: 'error',
                text: 'Enter a valid recipient wallet id and a positive amount.'
            });
            return;
        }
        if (recipient === wallet.walletId) {
            setLoading(false);
            setMessage({
                type: 'error',
                text: "You can't send to your own wallet."
            });
            return;
        }
        if (Number(wallet.balance) < amt) {
            setLoading(false);
            setMessage({
                type: 'error',
                text: 'Insufficient balance.'
            });
            return;
        }
        try {
            const transferCandidates = [
                '/api/crypto/transfer',
                '/api/crypto/wallets/transfer',
                '/api/crypto/transactions',
                '/api/crypto/wallets/send',
                '/api/crypto/transfer-funds',
                '/api/wallets/transfer',
                '/api/transactions',
                '/api/wallets/send',
                '/api/wallets/transfer-funds'
            ];
            for (const p of transferCandidates){
                const resp = await tryPostJson(p, {
                    fromWalletId: wallet.walletId,
                    toWalletId: recipient,
                    amount: amt
                });
                if (resp) {
                    const updatedSender = (resp === null || resp === void 0 ? void 0 : resp.sender) || (resp === null || resp === void 0 ? void 0 : resp.fromWallet) || (resp === null || resp === void 0 ? void 0 : resp.updatedSender) || (resp === null || resp === void 0 ? void 0 : resp.wallet) || (resp === null || resp === void 0 ? void 0 : resp.data) && resp.data.sender || null;
                    const updatedReceiver = (resp === null || resp === void 0 ? void 0 : resp.receiver) || (resp === null || resp === void 0 ? void 0 : resp.toWallet) || (resp === null || resp === void 0 ? void 0 : resp.updatedReceiver) || (resp === null || resp === void 0 ? void 0 : resp.wallet) || (resp === null || resp === void 0 ? void 0 : resp.data) && resp.data.receiver || null;
                    if (updatedSender && (updatedSender.walletId || updatedSender.id || updatedSender._id)) {
                        const normSender = updatedSender.walletId ? updatedSender : {
                            ...updatedSender,
                            walletId: updatedSender.walletId || updatedSender.id || updatedSender._id
                        };
                        setWallet(normSender);
                        setAmount('');
                        setRecipient('');
                        setMessage({
                            type: 'success',
                            text: "Sent ".concat(amt, " to ").concat(recipient, " (server).")
                        });
                        setLoading(false);
                        return;
                    }
                    if (resp.success || resp.status === 'ok' || resp.transactionId) {
                        // attempt to refresh sender wallet from server
                        const ref = await tryFetchJson("/api/crypto/wallets/".concat(encodeURIComponent(wallet.walletId))) || await tryFetchJson("/api/crypto/wallets?userId=".concat(encodeURIComponent(userId))) || await tryFetchJson("/api/wallets/".concat(encodeURIComponent(wallet.walletId))) || await tryFetchJson("/api/wallets/user/".concat(encodeURIComponent(userId)));
                        if (ref && (ref.wallet || ref.balance || ref.id)) {
                            const w = ref.wallet || ref;
                            const norm = w.walletId ? w : {
                                ...w,
                                walletId: w.walletId || w.id || w._id
                            };
                            setWallet(norm);
                        } else {
                            // optimistic UI update if server gave only generic success
                            setWallet((prev)=>prev ? {
                                    ...prev,
                                    balance: Number(prev.balance) - amt
                                } : prev);
                        }
                        setAmount('');
                        setRecipient('');
                        setMessage({
                            type: 'success',
                            text: "Sent ".concat(amt, " to ").concat(recipient, " (server acknowledged).")
                        });
                        setLoading(false);
                        return;
                    }
                }
            }
        } catch (e) {
        // ignore and fall through to error path
        }
        setLoading(false);
        setMessage({
            type: 'error',
            text: 'Transfer failed: could not complete transfer on server.'
        });
    }
    // render small line chart SVG
    function renderLineChart() {
        let points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 420, height = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 120;
        if (!points || points.length === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: '#666',
                    fontSize: 12
                },
                children: "No chart data"
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 389,
                columnNumber: 14
            }, this);
        }
        const minT = Math.min(...points.map((p)=>p.t));
        const maxT = Math.max(...points.map((p)=>p.t));
        const minB = Math.min(...points.map((p)=>p.b));
        const maxB = Math.max(...points.map((p)=>p.b));
        const pad = 8;
        const innerW = width - pad * 2;
        const innerH = height - pad * 2 || 1;
        const toX = (t)=>pad + (t - minT) / Math.max(1, maxT - minT) * innerW;
        const toY = (b)=>pad + (1 - (b - minB) / Math.max(1, maxB - minB)) * innerH;
        const path = points.map((p, i)=>"".concat(i === 0 ? 'M' : 'L', " ").concat(toX(p.t), " ").concat(toY(p.b))).join(' ');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            style: {
                background: '#fff'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "g",
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#d0ebff",
                                stopOpacity: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#fff",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                    lineNumber: 403,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: path,
                    fill: "none",
                    stroke: "#0b74de",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                    lineNumber: 409,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "".concat(path, " L ").concat(toX(maxT), " ").concat(height - pad, " L ").concat(toX(minT), " ").concat(height - pad, " Z"),
                    fill: "url(#g)",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                    lineNumber: 411,
                    columnNumber: 9
                }, this),
                points.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: toX(p.t),
                        cy: toY(p.b),
                        r: 2.2,
                        fill: "#0b74de"
                    }, i, false, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 413,
                        columnNumber: 31
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/uis/crypto/[id]/page.js",
            lineNumber: 402,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 16,
            maxWidth: 760,
            fontFamily: 'Arial, sans-serif',
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    marginTop: 0
                },
                children: "Simple Wallet"
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 420,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 10,
                    color: '#666'
                },
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 422,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#666'
                        },
                        children: "Connected user:"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 600
                        },
                        children: userId !== null && userId !== void 0 ? userId : 'Not detected'
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 12
                },
                children: wallet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: 12,
                        border: '1px solid #eee',
                        borderRadius: 8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        minWidth: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Wallet ID:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                wordBreak: 'break-all'
                                            },
                                            children: wallet.walletId
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCopyWalletId,
                                    style: {
                                        padding: '6px 10px',
                                        borderRadius: 6,
                                        border: '1px solid #ccc',
                                        background: '#fff',
                                        cursor: 'pointer'
                                    },
                                    children: "Copy"
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                    lineNumber: 437,
                                    columnNumber: 15
                                }, this),
                                copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#064',
                                        fontSize: 12
                                    },
                                    children: "Copied!"
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                    lineNumber: 449,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                            lineNumber: 432,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Balance:"
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                    lineNumber: 451,
                                    columnNumber: 43
                                }, this),
                                " ",
                                Number(wallet.balance || 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                    lineNumber: 431,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 8,
                        color: '#666'
                    },
                    children: 'No wallet found in DB. Use "Create wallet" to create one on the server.'
                }, void 0, false, {
                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                    lineNumber: 454,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    marginBottom: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCreateWallet,
                    disabled: !userId,
                    style: {
                        padding: '10px 14px',
                        background: userId ? '#0b74de' : '#ccc',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        cursor: userId ? 'pointer' : 'not-allowed'
                    },
                    children: "Create wallet (default balance 10)"
                }, void 0, false, {
                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                    lineNumber: 459,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 12,
                    border: '1px solid #eee',
                    borderRadius: 8,
                    maxWidth: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 8,
                            fontWeight: 600
                        },
                        children: "Send funds"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            marginBottom: 8,
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Recipient wallet id",
                                value: recipient,
                                onChange: (e)=>setRecipient(e.target.value),
                                style: {
                                    flex: '1 1 200px',
                                    padding: '8px 10px',
                                    borderRadius: 6,
                                    border: '1px solid #ccc',
                                    minWidth: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Amount",
                                value: amount,
                                onChange: (e)=>setAmount(e.target.value),
                                style: {
                                    flex: '0 0 120px',
                                    padding: '8px 10px',
                                    borderRadius: 6,
                                    border: '1px solid #ccc'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                style: {
                                    padding: '8px 12px',
                                    borderRadius: 6,
                                    border: 'none',
                                    background: '#0b74de',
                                    color: '#fff',
                                    cursor: 'pointer'
                                },
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 8,
                            borderRadius: 6,
                            background: message.type === 'error' ? '#ffecec' : '#e6ffef',
                            color: message.type === 'error' ? '#a33' : '#064'
                        },
                        children: message.text
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 475,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/crypto/[id]/page.js",
        lineNumber: 419,
        columnNumber: 5
    }, this);
}
_s(CryptoDetailSimple, "JktsTk9WD6RR2Wn5mXGgvNCaaU0=");
_c = CryptoDetailSimple;
var _c;
__turbopack_context__.k.register(_c, "CryptoDetailSimple");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_uis_crypto_%5Bid%5D_page_1d52a904.js.map