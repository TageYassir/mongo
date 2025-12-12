(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/uis/crypto/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CryptoDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Crypto detail / wallet page — updated to new Wallet/Transaction model shape & API routes.
// Key changes:
// - Use wallet.walletId and wallet.userId (not idcrypto).
// - POST to /api/wallets/create-wallet for server wallet creation.
// - Normalize server response wallet shape before persisting locally.
// - findWalletKeyByWalletId recognizes both walletId and legacy idcrypto fields.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CryptoDetailPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var _params_id;
    const idFromParams = (_params_id = params === null || params === void 0 ? void 0 : params.id) !== null && _params_id !== void 0 ? _params_id : 'unknown';
    const id = String(idFromParams);
    // user / wallet state
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [wallet, setWallet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detecting, setDetecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userPseudo, setUserPseudo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // transaction UI state
    const [recipientWalletId, setRecipientWalletId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sendAmount, setSendAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Helpers: safe references to browser globals
    const hasWindow = "object" !== 'undefined';
    const hasDocument = typeof document !== 'undefined';
    const hasFetch = typeof fetch !== 'undefined';
    const COOKIE_KEY = 'userId';
    // cookie helpers
    function getUserIdFromCookie() {
        if (!hasDocument) return null;
        try {
            const m = document.cookie.match(/(?:^|;\s*)userId=([^;]+)/);
            return m ? decodeURIComponent(m[1]) : null;
        } catch (e) {
            return null;
        }
    }
    function setUserIdCookie(idVal) {
        if (!hasDocument) return;
        try {
            document.cookie = "".concat(COOKIE_KEY, "=").concat(encodeURIComponent(idVal), "; path=/; max-age=").concat(60 * 60 * 24 * 365);
        } catch (e) {}
    }
    function clearUserIdCookie() {
        if (!hasDocument) return;
        try {
            document.cookie = "".concat(COOKIE_KEY, "=; path=/; max-age=0");
        } catch (e) {}
    }
    // window/global heuristics
    function getUserIdFromWindow() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            if (window.__USER_ID__) return window.__USER_ID__;
            if (window.__NEXT_DATA__) {
                var _nd_props_pageProps_user, _nd_props_pageProps, _nd_props, _nd_props_pageProps1, _nd_props1, _nd_props_pageProps_user1, _nd_props_pageProps2, _nd_props2;
                const nd = window.__NEXT_DATA__;
                const maybe = ((_nd_props = nd.props) === null || _nd_props === void 0 ? void 0 : (_nd_props_pageProps = _nd_props.pageProps) === null || _nd_props_pageProps === void 0 ? void 0 : (_nd_props_pageProps_user = _nd_props_pageProps.user) === null || _nd_props_pageProps_user === void 0 ? void 0 : _nd_props_pageProps_user.id) || ((_nd_props1 = nd.props) === null || _nd_props1 === void 0 ? void 0 : (_nd_props_pageProps1 = _nd_props1.pageProps) === null || _nd_props_pageProps1 === void 0 ? void 0 : _nd_props_pageProps1.userId) || ((_nd_props2 = nd.props) === null || _nd_props2 === void 0 ? void 0 : (_nd_props_pageProps2 = _nd_props2.pageProps) === null || _nd_props_pageProps2 === void 0 ? void 0 : (_nd_props_pageProps_user1 = _nd_props_pageProps2.user) === null || _nd_props_pageProps_user1 === void 0 ? void 0 : _nd_props_pageProps_user1.userId);
                if (maybe) return maybe;
            }
            if (window.app && window.app.currentUser) {
                return window.app.currentUser.id || window.app.currentUser.userId || null;
            }
        } catch (e) {}
        return null;
    }
    // localStorage/sessionStorage heuristics
    function getUserIdFromStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const candidates = [
                'userId',
                'currentUserId',
                'currentUser',
                'user',
                'me',
                'auth.userId'
            ];
            for (const key of candidates){
                try {
                    const raw = localStorage.getItem(key) || sessionStorage.getItem(key);
                    if (!raw) continue;
                    if (raw.trim().startsWith('{') || raw.trim().startsWith('[')) {
                        const parsed = JSON.parse(raw);
                        const maybe = (parsed === null || parsed === void 0 ? void 0 : parsed.id) || (parsed === null || parsed === void 0 ? void 0 : parsed.userId) || (parsed === null || parsed === void 0 ? void 0 : parsed.uid);
                        if (maybe) return maybe;
                    } else {
                        return raw;
                    }
                } catch (e) {}
            }
        } catch (e) {}
        return null;
    }
    async function fetchUserFromRoute() {
        if (!hasFetch) return null;
        const tries = [
            '/api/user',
            '/user',
            '/api/me',
            '/api/auth/user',
            '/api/profile',
            '/api/session'
        ];
        for (const path of tries){
            try {
                var _json_u, _json_user, _json_data;
                const res = await fetch(path, {
                    credentials: 'same-origin'
                });
                if (!res.ok) continue;
                const json = await res.json().catch(()=>null);
                const idFromU = (json === null || json === void 0 ? void 0 : (_json_u = json.u) === null || _json_u === void 0 ? void 0 : _json_u.id) || (json === null || json === void 0 ? void 0 : (_json_user = json.user) === null || _json_user === void 0 ? void 0 : _json_user.id) || (json === null || json === void 0 ? void 0 : json.id) || (json === null || json === void 0 ? void 0 : json.userId) || (json === null || json === void 0 ? void 0 : json.uid) || (json === null || json === void 0 ? void 0 : (_json_data = json.data) === null || _json_data === void 0 ? void 0 : _json_data.id);
                if (idFromU) return idFromU;
            } catch (e) {}
        }
        return null;
    }
    function getUserIdFromUrl() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const qp = new URLSearchParams(window.location.search);
            const v = qp.get('userId') || qp.get('uid') || qp.get('userid');
            return v;
        } catch (e) {
            return null;
        }
    }
    // try to resolve a user pseudo/display name from available client-side sources
    function findUserPseudo(idToFind) {
        if (!idToFind || !hasWindow) return null;
        try {
            var _w_app, _w___NEXT_DATA___props_pageProps, _w___NEXT_DATA___props, _w___NEXT_DATA__, _w___NEXT_DATA___props1, _w___NEXT_DATA__1;
            const w = window;
            const tryObj = (obj)=>{
                if (!obj) return null;
                if (obj.id === idToFind || obj.userId === idToFind || obj.uid === idToFind || obj._id === idToFind) {
                    return obj.pseudo || obj.username || obj.userName || obj.name || obj.displayName || obj.handle || null;
                }
                return null;
            };
            const candidates = [
                w.__USER__,
                w.__CURRENT_USER__,
                (_w_app = w.app) === null || _w_app === void 0 ? void 0 : _w_app.currentUser,
                (_w___NEXT_DATA__ = w.__NEXT_DATA__) === null || _w___NEXT_DATA__ === void 0 ? void 0 : (_w___NEXT_DATA___props = _w___NEXT_DATA__.props) === null || _w___NEXT_DATA___props === void 0 ? void 0 : (_w___NEXT_DATA___props_pageProps = _w___NEXT_DATA___props.pageProps) === null || _w___NEXT_DATA___props_pageProps === void 0 ? void 0 : _w___NEXT_DATA___props_pageProps.user,
                (_w___NEXT_DATA__1 = w.__NEXT_DATA__) === null || _w___NEXT_DATA__1 === void 0 ? void 0 : (_w___NEXT_DATA___props1 = _w___NEXT_DATA__1.props) === null || _w___NEXT_DATA___props1 === void 0 ? void 0 : _w___NEXT_DATA___props1.pageProps
            ];
            for (const c of candidates){
                const maybe = tryObj(c);
                if (maybe) return maybe;
            }
            const keysToTry = [
                'currentUser',
                'user',
                'me',
                'profile',
                'auth.user',
                'profile.user'
            ];
            for (const k of keysToTry){
                try {
                    const raw = localStorage.getItem(k);
                    if (!raw) continue;
                    const parsed = JSON.parse(raw);
                    const maybe = tryObj(parsed);
                    if (maybe) return maybe;
                } catch (e) {}
            }
            for(let i = 0; i < localStorage.length; i++){
                try {
                    const key = localStorage.key(i);
                    const raw = localStorage.getItem(key);
                    if (!raw) continue;
                    if (!raw.trim().startsWith('{')) continue;
                    const parsed = JSON.parse(raw);
                    const maybe = tryObj(parsed);
                    if (maybe) return maybe;
                } catch (e) {}
            }
        } catch (e) {}
        return null;
    }
    function walletStorageKey(uid, cryptoId) {
        return "wallet:".concat(uid, ":").concat(cryptoId);
    }
    function txStorageKey(walletId) {
        return "tx:".concat(walletId);
    }
    // scan localStorage to find a wallet by its walletId (or legacy idcrypto) and return { key, wallet } or null
    function findWalletKeyByWalletId(targetWalletId) {
        if (!hasWindow || !targetWalletId) return null;
        try {
            for(let i = 0; i < localStorage.length; i++){
                const key = localStorage.key(i);
                if (!key || !key.startsWith('wallet:')) continue;
                try {
                    const raw = localStorage.getItem(key);
                    if (!raw) continue;
                    const parsed = JSON.parse(raw);
                    // accept wallet.walletId or wallet.idcrypto (legacy) or wallet.id
                    if (parsed && (parsed.walletId === targetWalletId || parsed.idcrypto === targetWalletId || parsed.id === targetWalletId)) {
                        return {
                            key,
                            wallet: parsed
                        };
                    }
                } catch (e) {}
            }
        } catch (e) {}
        return null;
    }
    // initial detection: cookie/window/storage/url/api
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoDetailPage.useEffect": ()=>{
            let mounted = true;
            ({
                "CryptoDetailPage.useEffect": async ()=>{
                    setDetecting(true);
                    const fromCookie = getUserIdFromCookie();
                    const fromWindow = getUserIdFromWindow();
                    const fromStorage = getUserIdFromStorage();
                    const fromUrl = getUserIdFromUrl();
                    let detected = fromCookie || fromWindow || fromStorage || fromUrl || '';
                    if (!detected) {
                        try {
                            const fromApi = await fetchUserFromRoute();
                            if (fromApi) detected = fromApi;
                        } catch (e) {}
                    }
                    if (mounted && detected) {
                        setUserId(String(detected));
                        setUserIdCookie(String(detected));
                        try {
                            if ("TURBOPACK compile-time truthy", 1) localStorage.setItem('userId', String(detected));
                        } catch (e) {}
                    }
                    if (mounted) setDetecting(false);
                }
            })["CryptoDetailPage.useEffect"]();
            return ({
                "CryptoDetailPage.useEffect": ()=>{
                    mounted = false;
                }
            })["CryptoDetailPage.useEffect"];
        }
    }["CryptoDetailPage.useEffect"], []);
    // If route is /uis/crypto/new, redirect to /uis/crypto/<userId> once userId is known.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoDetailPage.useEffect": ()=>{
            if (id === 'new' && userId) {
                const target = "/uis/crypto/".concat(encodeURIComponent(String(userId)));
                try {
                    router.replace(target);
                } catch (e) {}
            }
        }
    }["CryptoDetailPage.useEffect"], [
        id,
        userId,
        router
    ]);
    // Load wallet for current user+crypto when available (from localStorage)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoDetailPage.useEffect": ()=>{
            if (!userId) {
                setWallet(null);
                return;
            }
            const cryptoId = id === 'new' ? userId : id;
            const key = walletStorageKey(userId, cryptoId);
            try {
                const raw = localStorage.getItem(key);
                if (raw) {
                    setWallet(JSON.parse(raw));
                } else {
                    setWallet(null);
                }
            } catch (e) {
                console.warn('failed reading wallet', e);
                setWallet(null);
            }
        }
    }["CryptoDetailPage.useEffect"], [
        userId,
        id
    ]);
    // load transactions for current wallet from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoDetailPage.useEffect": ()=>{
            if (!wallet || !wallet.walletId) {
                setTransactions([]);
                return;
            }
            try {
                const raw = localStorage.getItem(txStorageKey(wallet.walletId));
                if (raw) setTransactions(JSON.parse(raw));
                else setTransactions([]);
            } catch (e) {
                setTransactions([]);
            }
        }
    }["CryptoDetailPage.useEffect"], [
        wallet
    ]);
    // Create wallet locally and try to persist on server (/api/wallets/create-wallet)
    async function handleCreateWallet() {
        if (!userId) {
            setMessage({
                type: 'error',
                text: 'No connected user. Wallet creation disabled.'
            });
            return;
        }
        const cryptoId = id === 'new' ? userId : id;
        const key = walletStorageKey(userId, cryptoId);
        try {
            if (localStorage.getItem(key)) {
                setMessage({
                    type: 'error',
                    text: 'Wallet already exists.'
                });
                try {
                    setWallet(JSON.parse(localStorage.getItem(key)));
                } catch (e) {}
                return;
            }
        } catch (e) {}
        // create a deterministic-ish walletId for local use (server will create canonical walletId)
        const localWalletId = "".concat(cryptoId, "-").concat(userId, "-").concat(Math.random().toString(36).slice(2, 9));
        const newWallet = {
            walletId: localWalletId,
            userId: userId,
            balance: 10,
            currency: cryptoId,
            createdAt: new Date().toISOString()
        };
        try {
            // save locally first
            localStorage.setItem(key, JSON.stringify(newWallet));
            try {
                localStorage.setItem(txStorageKey(newWallet.walletId), JSON.stringify([]));
            } catch (e) {}
            setWallet(newWallet);
            setMessage({
                type: 'success',
                text: "Wallet created for ".concat(userId, " with balance ").concat(newWallet.balance, " ").concat(cryptoId)
            });
            // try persist to server (best-effort)
            try {
                const res = await fetch('/api/wallets/create-wallet', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId
                    })
                });
                const json = await res.json().catch(()=>({}));
                if (res.ok && json && json.success && json.wallet) {
                    const srv = json.wallet;
                    // normalize server wallet shape - prefer walletId, userId, balance
                    const normalized = {
                        walletId: srv.walletId || srv.idcrypto || srv.id || newWallet.walletId,
                        userId: srv.userId || srv.owner || userId,
                        balance: typeof srv.balance === 'number' ? srv.balance : srv.balance ? Number(srv.balance) : newWallet.balance,
                        currency: cryptoId,
                        createdAt: srv.createdAt || srv.createdAt || newWallet.createdAt
                    };
                    // overwrite local storage entry with normalized server wallet
                    try {
                        localStorage.setItem(key, JSON.stringify(normalized));
                    } catch (e) {}
                    // ensure tx list exists under new walletId (if walletId changed)
                    try {
                        const prevTxKey = txStorageKey(newWallet.walletId);
                        const newTxKey = txStorageKey(normalized.walletId);
                        const prevRaw = localStorage.getItem(prevTxKey);
                        if (prevRaw && !localStorage.getItem(newTxKey)) {
                            localStorage.setItem(newTxKey, prevRaw);
                        } else if (!localStorage.getItem(newTxKey)) {
                            localStorage.setItem(newTxKey, JSON.stringify([]));
                        }
                    } catch (e) {}
                    setWallet(normalized);
                    setMessage({
                        type: 'success',
                        text: 'Wallet saved to server.'
                    });
                } else {
                    setMessage({
                        type: 'info',
                        text: "Wallet created locally. Server returned ".concat(res.status || 'no-response', ".")
                    });
                }
            } catch (e) {
                setMessage({
                    type: 'info',
                    text: 'Wallet created locally (server save failed).'
                });
            }
        } catch (e) {
            console.error('create wallet failed', e);
            setMessage({
                type: 'error',
                text: 'Could not create wallet (storage error).'
            });
        }
    }
    // perform a send/transfer from current wallet to recipientWalletId (local-only)
    async function handleSend() {
        if (!wallet || !wallet.walletId) {
            setMessage({
                type: 'error',
                text: 'No wallet available to send from.'
            });
            return;
        }
        const amt = Number(sendAmount);
        if (!recipientWalletId || !amt || amt <= 0) {
            setMessage({
                type: 'error',
                text: 'Enter a valid recipient wallet id and amount.'
            });
            return;
        }
        if (recipientWalletId === wallet.walletId) {
            setMessage({
                type: 'error',
                text: "You can't send to your own wallet."
            });
            return;
        }
        if (Number(wallet.balance) < amt) {
            setMessage({
                type: 'error',
                text: 'Insufficient balance.'
            });
            return;
        }
        try {
            const found = findWalletKeyByWalletId(recipientWalletId);
            if (!found) {
                setMessage({
                    type: 'error',
                    text: 'Recipient wallet not found.'
                });
                return;
            }
            const recipient = found.wallet;
            // ensure same currency if recipient defines it
            if (recipient.currency && wallet.currency && recipient.currency !== wallet.currency) {
                setMessage({
                    type: 'error',
                    text: 'Recipient wallet uses a different currency.'
                });
                return;
            }
            // determine senderKey (scan for it)
            const possibleSender = findWalletKeyByWalletId(wallet.walletId);
            const senderKey = (possibleSender === null || possibleSender === void 0 ? void 0 : possibleSender.key) || walletStorageKey(wallet.userId || wallet.owner || userId, wallet.currency || id);
            const recipientKey = found.key;
            // update balances
            const updatedSender = {
                ...wallet,
                balance: Number(wallet.balance) - amt
            };
            const updatedRecipient = {
                ...recipient,
                balance: Number(recipient.balance || 0) + amt
            };
            // persist updated wallets
            try {
                localStorage.setItem(senderKey, JSON.stringify(updatedSender));
                localStorage.setItem(recipientKey, JSON.stringify(updatedRecipient));
            } catch (e) {
                setMessage({
                    type: 'error',
                    text: 'Send failed due to storage write error.'
                });
                return;
            }
            // push transactions for both wallets
            const now = new Date().toISOString();
            const txOut = {
                id: Math.random().toString(36).slice(2, 9),
                type: 'send',
                amount: amt,
                to: recipient.walletId,
                at: now,
                currency: wallet.currency
            };
            const txIn = {
                id: Math.random().toString(36).slice(2, 9),
                type: 'receive',
                amount: amt,
                from: wallet.walletId,
                at: now,
                currency: wallet.currency
            };
            try {
                const senderTxKey = txStorageKey(wallet.walletId);
                const recipientTxKey = txStorageKey(recipient.walletId);
                const senderRaw = localStorage.getItem(senderTxKey);
                const recipientRaw = localStorage.getItem(recipientTxKey);
                const senderList = senderRaw ? JSON.parse(senderRaw) : [];
                const recipientList = recipientRaw ? JSON.parse(recipientRaw) : [];
                senderList.unshift(txOut);
                recipientList.unshift(txIn);
                localStorage.setItem(senderTxKey, JSON.stringify(senderList));
                localStorage.setItem(recipientTxKey, JSON.stringify(recipientList));
            } catch (e) {
            // ignore tx write errors
            }
            // update local state
            setWallet(updatedSender);
            setTransactions((prev)=>[
                    txOut,
                    ...prev
                ]);
            setMessage({
                type: 'success',
                text: "Sent ".concat(amt, " ").concat(wallet.currency || '', " to ").concat(recipient.walletId)
            });
            setSendAmount('');
            setRecipientWalletId('');
        } catch (e) {
            console.error('send failed', e);
            setMessage({
                type: 'error',
                text: 'Send failed due to storage error.'
            });
        }
    }
    function handleSignOut() {
        clearUserIdCookie();
        try {
            localStorage.removeItem('userId');
        } catch (e) {}
        setUserId('');
        setWallet(null);
        setMessage({
            type: 'info',
            text: 'Disconnected local user.'
        });
    }
    async function handleCopyWalletId() {
        if (!wallet || !wallet.walletId) {
            setMessage({
                type: 'error',
                text: 'No wallet id available to copy.'
            });
            return;
        }
        const text = wallet.walletId;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else if (typeof document !== 'undefined') {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.left = '-9999px';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            setMessage({
                type: 'success',
                text: 'Wallet id copied to clipboard.'
            });
        } catch (e) {
            setMessage({
                type: 'error',
                text: 'Failed to copy wallet id.'
            });
        }
    }
    const displayId = id === 'new' && userId ? String(userId) : String(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CryptoDetailPage.useEffect": ()=>{
            let mounted = true;
            ({
                "CryptoDetailPage.useEffect": async ()=>{
                    if (!mounted) return;
                    const candidateId = displayId;
                    const pseudo = findUserPseudo(candidateId);
                    if (mounted) {
                        if (pseudo) setUserPseudo(String(pseudo));
                        else {
                            if (candidateId && candidateId.length > 12) setUserPseudo("".concat(candidateId.slice(0, 8), "..."));
                            else setUserPseudo(candidateId || '');
                        }
                    }
                }
            })["CryptoDetailPage.useEffect"]();
            return ({
                "CryptoDetailPage.useEffect": ()=>{
                    mounted = false;
                }
            })["CryptoDetailPage.useEffect"];
        }
    }["CryptoDetailPage.useEffect"], [
        displayId,
        userId,
        wallet
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            margin: 0,
                            textTransform: 'capitalize'
                        },
                        children: String(userPseudo || '').replace('-', ' ')
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 6,
                            color: '#666'
                        },
                        children: [
                            "Manage your wallet for ",
                            String(userPseudo || '').replace('-', ' '),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    background: '#fff',
                    padding: 16,
                    borderRadius: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#333'
                        },
                        children: [
                            "Create or view your wallet for ",
                            String(userPseudo || '').replace('-', ' '),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/uis/crypto",
                            style: {
                                color: '#0366d6',
                                textDecoration: 'none'
                            },
                            children: "Back to dashboard"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 18,
                            padding: 12,
                            border: '1px solid #eee',
                            borderRadius: 8,
                            maxWidth: 680
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 8,
                                    color: '#444',
                                    fontWeight: 600
                                },
                                children: "Connected user"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this),
                            userId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    flexWrap: 'wrap'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#222'
                                    },
                                    children: [
                                        "User id: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: userId
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 514,
                                            columnNumber: 55
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                    lineNumber: 514,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 513,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: '#777'
                                },
                                children: detecting ? 'Detecting connected user...' : 'No connected user detected.'
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 517,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: wallet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: 10,
                                        borderRadius: 8,
                                        background: '#f7ffef',
                                        border: '1px solid #e6ffdf'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 700
                                            },
                                            children: [
                                                "Wallet: ",
                                                wallet.walletId
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#444'
                                                    },
                                                    children: [
                                                        "Wallet ID:",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            style: {
                                                                wordBreak: 'break-all',
                                                                display: 'inline-block'
                                                            },
                                                            children: wallet.walletId
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                            lineNumber: 529,
                                                            columnNumber: 21
                                                        }, this),
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleCopyWalletId,
                                                            title: "Copy wallet id",
                                                            style: {
                                                                marginLeft: 8,
                                                                padding: '4px 8px',
                                                                borderRadius: 6,
                                                                border: '1px solid #ddd',
                                                                background: '#fff',
                                                                cursor: 'pointer',
                                                                fontSize: 12
                                                            },
                                                            children: "Copy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                            lineNumber: 531,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                    lineNumber: 527,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#444',
                                                        marginTop: 6
                                                    },
                                                    children: [
                                                        "Balance: ",
                                                        Number(wallet.balance || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                    lineNumber: 547,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 12,
                                                display: 'flex',
                                                gap: 8,
                                                alignItems: 'center',
                                                flexWrap: 'wrap'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    "aria-label": "recipient wallet id",
                                                    placeholder: "Recipient wallet id",
                                                    value: recipientWalletId,
                                                    onChange: (e)=>setRecipientWalletId(e.target.value),
                                                    style: {
                                                        padding: '8px 10px',
                                                        borderRadius: 6,
                                                        border: '1px solid #ccc',
                                                        minWidth: 240
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                    lineNumber: 554,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    "aria-label": "amount",
                                                    placeholder: "Amount",
                                                    value: sendAmount,
                                                    onChange: (e)=>setSendAmount(e.target.value),
                                                    style: {
                                                        padding: '8px 10px',
                                                        borderRadius: 6,
                                                        border: '1px solid #ccc',
                                                        width: 120
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                    lineNumber: 561,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSend,
                                                    disabled: !recipientWalletId || !sendAmount,
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
                                                    lineNumber: 568,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 553,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 600,
                                                        marginBottom: 6
                                                    },
                                                    children: "Transactions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                    lineNumber: 586,
                                                    columnNumber: 19
                                                }, this),
                                                transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#666',
                                                        fontSize: 13
                                                    },
                                                    children: "No transactions yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                    lineNumber: 588,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: 6
                                                    },
                                                    children: transactions.slice(0, 20).map((tx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: 8,
                                                                borderRadius: 6,
                                                                background: '#fff',
                                                                border: '1px solid #eee',
                                                                fontSize: 13
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: [
                                                                            tx.type === 'send' ? 'Sent' : 'Received',
                                                                            " ",
                                                                            tx.amount,
                                                                            " ",
                                                                            tx.currency
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                                        lineNumber: 593,
                                                                        columnNumber: 32
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                                    lineNumber: 593,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        color: '#666',
                                                                        marginTop: 4,
                                                                        fontSize: 12
                                                                    },
                                                                    children: [
                                                                        tx.type === 'send' ? "To: ".concat(tx.to) : "From: ".concat(tx.from),
                                                                        " — ",
                                                                        new Date(tx.at).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                                    lineNumber: 594,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, tx.id, true, {
                                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                            lineNumber: 592,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                                    lineNumber: 590,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 585,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                    lineNumber: 524,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 8,
                                        alignItems: 'center',
                                        marginTop: 6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCreateWallet,
                                            disabled: !userId,
                                            style: {
                                                padding: '10px 12px',
                                                borderRadius: 8,
                                                border: 'none',
                                                background: userId ? '#0b74de' : '#ccc',
                                                color: '#fff',
                                                cursor: userId ? 'pointer' : 'not-allowed'
                                            },
                                            children: [
                                                "Create wallet (receive 10 ",
                                                String(displayId).toUpperCase(),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 605,
                                            columnNumber: 17
                                        }, this),
                                        !userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: '#777',
                                                fontSize: 13
                                            },
                                            children: "Wallet creation is disabled until a connected user is detected or you provide a user id."
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/crypto/[id]/page.js",
                                            lineNumber: 619,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/uis/crypto/[id]/page.js",
                                    lineNumber: 604,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    padding: 8,
                                    borderRadius: 6,
                                    background: message.type === 'error' ? '#ffecec' : message.type === 'success' ? '#e6ffef' : '#fffbe6',
                                    color: message.type === 'error' ? '#a33' : message.type === 'success' ? '#064' : '#664'
                                },
                                children: message.text
                            }, void 0, false, {
                                fileName: "[project]/app/uis/crypto/[id]/page.js",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 14,
                            color: '#999',
                            fontSize: 12
                        },
                        children: "Note: the page tries cookies, window globals, localStorage, URL query param (userId) and common /api endpoints to detect a connected user automatically."
                    }, void 0, false, {
                        fileName: "[project]/app/uis/crypto/[id]/page.js",
                        lineNumber: 637,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/crypto/[id]/page.js",
                lineNumber: 502,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/crypto/[id]/page.js",
        lineNumber: 496,
        columnNumber: 5
    }, this);
}
_s(CryptoDetailPage, "R690G+agVKqR2AOsm3c2EEZ2u4Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CryptoDetailPage;
var _c;
__turbopack_context__.k.register(_c, "CryptoDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=_789ac059._.js.map