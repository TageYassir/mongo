(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/uis/user-space/profile/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProfilePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const idFromRoute = params === null || params === void 0 ? void 0 : params.id;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [relationship, setRelationship] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [friendsCount, setFriendsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function resolveCurrentUserId() {
        try {
            const res = await fetch('/api/auth/me');
            if (res.ok) {
                var _payload_user, _payload_user1;
                const payload = await res.json().catch(()=>null);
                const id = (payload === null || payload === void 0 ? void 0 : (_payload_user = payload.user) === null || _payload_user === void 0 ? void 0 : _payload_user._id) || (payload === null || payload === void 0 ? void 0 : (_payload_user1 = payload.user) === null || _payload_user1 === void 0 ? void 0 : _payload_user1.id) || (payload === null || payload === void 0 ? void 0 : payload.id) || null;
                if (id) return id;
            }
        } catch (err) {}
        try {
            const res2 = await fetch('/api/users?operation=get-current');
            if (res2.ok) {
                var _payload2_user, _payload2_user1;
                const payload2 = await res2.json().catch(()=>null);
                const id2 = (payload2 === null || payload2 === void 0 ? void 0 : (_payload2_user = payload2.user) === null || _payload2_user === void 0 ? void 0 : _payload2_user._id) || (payload2 === null || payload2 === void 0 ? void 0 : (_payload2_user1 = payload2.user) === null || _payload2_user1 === void 0 ? void 0 : _payload2_user1.id) || (payload2 === null || payload2 === void 0 ? void 0 : payload2.id) || null;
                if (id2) return id2;
            }
        } catch (err) {}
        try {
            if ("object" !== 'undefined' && window.localStorage) {
                const raw = localStorage.getItem('user');
                if (raw) {
                    const parsed = JSON.parse(raw);
                    const lid = (parsed === null || parsed === void 0 ? void 0 : parsed.id) || (parsed === null || parsed === void 0 ? void 0 : parsed._id) || null;
                    if (lid) return lid;
                }
            }
        } catch (err) {}
        return null;
    }
    // Add: robust friends count fetch helper
    async function fetchFriendsCountFor(id) {
        if (!id) return 0;
        const endpoints = [
            "/api/friends?operation=count&userId=".concat(encodeURIComponent(id)),
            "/api/friends?operation=get-friends&userId=".concat(encodeURIComponent(id)),
            "/api/friends?operation=list&userId=".concat(encodeURIComponent(id)),
            "/api/friends?operation=get&userId=".concat(encodeURIComponent(id)),
            "/api/friends?userId=".concat(encodeURIComponent(id)),
            "/api/users/".concat(encodeURIComponent(id), "/friends")
        ];
        const parseCount = (json)=>{
            var _json_meta, _json_meta1, _json_data, _json_friends, _json_items;
            if (json == null) return null;
            if (Array.isArray(json)) return json.length;
            // common fields
            const candidates = [
                json.count,
                json.total,
                json.friendsCount,
                json.totalCount,
                json.length,
                (_json_meta = json.meta) === null || _json_meta === void 0 ? void 0 : _json_meta.total,
                (_json_meta1 = json.meta) === null || _json_meta1 === void 0 ? void 0 : _json_meta1.count,
                (_json_data = json.data) === null || _json_data === void 0 ? void 0 : _json_data.length,
                (_json_friends = json.friends) === null || _json_friends === void 0 ? void 0 : _json_friends.length,
                (_json_items = json.items) === null || _json_items === void 0 ? void 0 : _json_items.length
            ];
            for (const c of candidates){
                if (typeof c === 'number' && !Number.isNaN(c)) return c;
                if (typeof c === 'string' && !Number.isNaN(Number(c))) return Number(c);
            }
            return null;
        };
        for (const url of endpoints){
            try {
                const res = await fetch(url);
                if (!res.ok) continue;
                const json = await res.json().catch(()=>null);
                const c = parseCount(json);
                if (c != null) return c;
            } catch (e) {
            // ignore and try next
            }
        }
        return 0;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            let mounted = true;
            const fetchProfile = {
                "ProfilePage.useEffect.fetchProfile": async (targetId)=>{
                    setLoading(true);
                    setError(null);
                    try {
                        if (!targetId) {
                            setError('No user id provided in route');
                            setUser(null);
                            return;
                        }
                        const res = await fetch("/api/users/".concat(encodeURIComponent(targetId)), {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        if (!res.ok) {
                            const payload = await res.json().catch({
                                "ProfilePage.useEffect.fetchProfile": ()=>({})
                            }["ProfilePage.useEffect.fetchProfile"]);
                            throw new Error((payload === null || payload === void 0 ? void 0 : payload.error) || "Server returned ".concat(res.status));
                        }
                        const payload = await res.json().catch({
                            "ProfilePage.useEffect.fetchProfile": ()=>null
                        }["ProfilePage.useEffect.fetchProfile"]);
                        if (mounted) {
                            const resolvedUser = (payload === null || payload === void 0 ? void 0 : payload.user) || payload || null;
                            setUser(resolvedUser);
                            // Fetch friends count for this profile (resilient)
                            try {
                                const resolvedId = (resolvedUser === null || resolvedUser === void 0 ? void 0 : resolvedUser._id) || (resolvedUser === null || resolvedUser === void 0 ? void 0 : resolvedUser.id) || targetId;
                                if (resolvedId) {
                                    const count = await fetchFriendsCountFor(resolvedId);
                                    if (mounted) setFriendsCount(typeof count === 'number' ? count : 0);
                                } else {
                                    if (mounted) setFriendsCount(0);
                                }
                            } catch (e) {
                                if (mounted) setFriendsCount(0);
                            }
                        }
                    } catch (err) {
                        if (mounted) setError(err.message || 'Failed to load profile');
                    } finally{
                        if (mounted) setLoading(false);
                    }
                }
            }["ProfilePage.useEffect.fetchProfile"];
            const boot = {
                "ProfilePage.useEffect.boot": async ()=>{
                    const me = await resolveCurrentUserId();
                    if (!mounted) return;
                    setCurrentUserId(me);
                    const targetId = idFromRoute;
                    await fetchProfile(targetId);
                    if (me && targetId) {
                        try {
                            const relRes = await fetch("/api/friends?operation=get-relationship&userA=".concat(encodeURIComponent(me), "&userB=").concat(encodeURIComponent(targetId)));
                            if (relRes.ok) {
                                const relJson = await relRes.json().catch({
                                    "ProfilePage.useEffect.boot": ()=>null
                                }["ProfilePage.useEffect.boot"]);
                                if (mounted) setRelationship((relJson === null || relJson === void 0 ? void 0 : relJson.relationship) || null);
                            }
                        } catch (e) {}
                    }
                }
            }["ProfilePage.useEffect.boot"];
            boot();
            return ({
                "ProfilePage.useEffect": ()=>{
                    mounted = false;
                }
            })["ProfilePage.useEffect"];
        }
    }["ProfilePage.useEffect"], [
        idFromRoute
    ]);
    const sendRequest = async ()=>{
        if (!currentUserId) return alert('Not authenticated');
        if (!idFromRoute) return alert('No target user id');
        if (String(currentUserId) === String(idFromRoute)) return alert('Cannot send request to yourself');
        setProcessing(true);
        try {
            const res = await fetch('/api/friends', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    senderId: currentUserId,
                    receiverId: idFromRoute
                })
            });
            const payload = await res.json().catch(()=>null);
            if (!res.ok) throw new Error((payload === null || payload === void 0 ? void 0 : payload.error) || 'Failed to send request');
            const savedReq = (payload === null || payload === void 0 ? void 0 : payload.request) || payload;
            setRelationship(savedReq);
            // Dispatch an event so layouts and other UI can refresh
            try {
                if ("object" !== 'undefined' && window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('friend-request-changed', {
                        detail: {
                            action: 'sent',
                            request: savedReq
                        }
                    }));
                    console.debug('Dispatched friend-request-changed sent', savedReq);
                }
            } catch (e) {
                console.warn('Could not dispatch event', e);
            }
        } catch (err) {
            alert(err.message || 'Failed to send friend request');
        } finally{
            setProcessing(false);
        }
    };
    const respondRequest = async (action)=>{
        if (!relationship || !relationship._id) return;
        setProcessing(true);
        try {
            const res = await fetch('/api/friends', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    requestId: relationship._id,
                    action
                })
            });
            const payload = await res.json().catch(()=>null);
            if (!res.ok) throw new Error((payload === null || payload === void 0 ? void 0 : payload.error) || 'Failed to update request');
            const updated = (payload === null || payload === void 0 ? void 0 : payload.request) || payload;
            setRelationship(updated);
            // Dispatch event so layout can update invitations count
            try {
                if ("object" !== 'undefined' && window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('friend-request-changed', {
                        detail: {
                            action: action,
                            request: updated
                        }
                    }));
                    console.debug('Dispatched friend-request-changed', action, updated);
                }
            } catch (e) {
                console.warn('Could not dispatch event', e);
            }
        } catch (err) {
            alert(err.message || 'Failed to update request');
        } finally{
            setProcessing(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                p: 4,
                display: 'flex',
                justifyContent: 'center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {}, void 0, false, {
                fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                lineNumber: 229,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
            lineNumber: 228,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                p: 4
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    color: "error",
                    sx: {
                        mb: 2
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    variant: "contained",
                    size: "small",
                    onClick: ()=>router.push('/uis/all-users'),
                    children: "Back to All Users"
                }, void 0, false, {
                    fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                p: 4
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: {
                        mb: 2
                    },
                    children: [
                        'User not found for "',
                        idFromRoute,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    variant: "contained",
                    size: "small",
                    onClick: ()=>router.push('/uis/all-users'),
                    children: "Back to All Users"
                }, void 0, false, {
                    fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
            lineNumber: 245,
            columnNumber: 7
        }, this);
    }
    const displayName = user.pseudo || [
        user.firstName,
        user.lastName
    ].filter(Boolean).join(' ') || user.username || 'Unknown';
    const avatarSrc = user.avatar || null;
    const userId = user._id || user.id || idFromRoute;
    const relationshipStatus = (relationship === null || relationship === void 0 ? void 0 : relationship.status) || null;
    const amSender = relationship && String(relationship.senderId) === String(currentUserId);
    const amReceiver = relationship && String(relationship.receiverId) === String(currentUserId);
    const viewingOwnProfile = currentUserId && String(currentUserId) === String(idFromRoute);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            p: 4,
            maxWidth: 900,
            mx: 'auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: 'flex',
                    gap: 3,
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                        src: avatarSrc,
                        sx: {
                            width: 96,
                            height: 96,
                            bgcolor: avatarSrc ? 'transparent' : 'primary.main'
                        },
                        children: !avatarSrc && (displayName.charAt(0) || '?').toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h5",
                                sx: {
                                    fontWeight: 700
                                },
                                children: displayName
                            }, void 0, false, {
                                fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            user.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                color: "text.secondary",
                                children: [
                                    "@",
                                    user.username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                                lineNumber: 270,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    mt: 1
                                },
                                color: "text.secondary",
                                children: [
                                    "Friends: ",
                                    friendsCount == null ? '—' : friendsCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        direction: "row",
                        spacing: 1,
                        children: relationshipStatus === 'accepted' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "contained",
                            onClick: ()=>router.push("/uis/chat/".concat(encodeURIComponent(userId))),
                            children: "Message"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this) : relationshipStatus === 'pending' && amSender ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "outlined",
                            disabled: true,
                            children: "Request Sent"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this) : relationshipStatus === 'pending' && amReceiver ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: 'flex',
                                gap: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "contained",
                                    color: "success",
                                    onClick: ()=>respondRequest('accept'),
                                    disabled: processing,
                                    children: "Accept"
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "outlined",
                                    color: "error",
                                    onClick: ()=>respondRequest('refuse'),
                                    disabled: processing,
                                    children: "Refuse"
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this) : viewingOwnProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "outlined",
                            disabled: true,
                            children: "You (profile)"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "contained",
                            onClick: sendRequest,
                            disabled: processing || !currentUserId,
                            children: "Add Friend"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    mt: 3
                }
            }, void 0, false, {
                fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/user-space/profile/[id]/page.js",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_s(ProfilePage, "AkSgsLUPurN3ZXOfM0fC5GEHIqc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ProfilePage;
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@mui/material/esm/internal/svg-icons/Person.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/createSvgIcon.js [app-client] (ecmascript)");
/**
 * @ignore - internal component.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSvgIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person');
}),
"[project]/node_modules/@mui/material/esm/Avatar/avatarClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAvatarUtilityClass",
    ()=>getAvatarUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-client] (ecmascript)");
;
;
function getAvatarUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAvatar', slot);
}
const avatarClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiAvatar', [
    'root',
    'colorDefault',
    'circular',
    'rounded',
    'square',
    'img',
    'fallback'
]);
const __TURBOPACK__default__export__ = avatarClasses;
}),
"[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/memoTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$svg$2d$icons$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/internal/svg-icons/Person.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$avatarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/avatarClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/utils/useSlot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { classes, variant, colorDefault } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            colorDefault && 'colorDefault'
        ],
        img: [
            'img'
        ],
        fallback: [
            'fallback'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$avatarClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvatarUtilityClass"], classes);
};
const AvatarRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            ownerState.colorDefault && styles.colorDefault
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    return {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: 40,
        height: 40,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(20),
        lineHeight: 1,
        borderRadius: '50%',
        overflow: 'hidden',
        userSelect: 'none',
        variants: [
            {
                props: {
                    variant: 'rounded'
                },
                style: {
                    borderRadius: (theme.vars || theme).shape.borderRadius
                }
            },
            {
                props: {
                    variant: 'square'
                },
                style: {
                    borderRadius: 0
                }
            },
            {
                props: {
                    colorDefault: true
                },
                style: {
                    color: (theme.vars || theme).palette.background.default,
                    ...theme.vars ? {
                        backgroundColor: theme.vars.palette.Avatar.defaultBg
                    } : {
                        backgroundColor: theme.palette.grey[400],
                        ...theme.applyStyles('dark', {
                            backgroundColor: theme.palette.grey[600]
                        })
                    }
                }
            }
        ]
    };
}));
const AvatarImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('img', {
    name: 'MuiAvatar',
    slot: 'Img'
})({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // Handle non-square image.
    objectFit: 'cover',
    // Hide alt text.
    color: 'transparent',
    // Hide the image broken icon, only works on Chrome.
    textIndent: 10000
});
const AvatarFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$internal$2f$svg$2d$icons$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiAvatar',
    slot: 'Fallback'
})({
    width: '75%',
    height: '75%'
});
function useLoaded(param) {
    let { crossOrigin, referrerPolicy, src, srcSet } = param;
    const [loaded, setLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLoaded.useEffect": ()=>{
            if (!src && !srcSet) {
                return undefined;
            }
            setLoaded(false);
            let active = true;
            const image = new Image();
            image.onload = ({
                "useLoaded.useEffect": ()=>{
                    if (!active) {
                        return;
                    }
                    setLoaded('loaded');
                }
            })["useLoaded.useEffect"];
            image.onerror = ({
                "useLoaded.useEffect": ()=>{
                    if (!active) {
                        return;
                    }
                    setLoaded('error');
                }
            })["useLoaded.useEffect"];
            image.crossOrigin = crossOrigin;
            image.referrerPolicy = referrerPolicy;
            image.src = src;
            if (srcSet) {
                image.srcset = srcSet;
            }
            return ({
                "useLoaded.useEffect": ()=>{
                    active = false;
                }
            })["useLoaded.useEffect"];
        }
    }["useLoaded.useEffect"], [
        crossOrigin,
        referrerPolicy,
        src,
        srcSet
    ]);
    return loaded;
}
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Avatar(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiAvatar'
    });
    const { alt, children: childrenProp, className, component = 'div', slots = {}, slotProps = {}, imgProps, sizes, src, srcSet, variant = 'circular', ...other } = props;
    let children = null;
    const ownerState = {
        ...props,
        component,
        variant
    };
    // Use a hook instead of onError on the img element to support server-side rendering.
    const loaded = useLoaded({
        ...imgProps,
        ...typeof slotProps.img === 'function' ? slotProps.img(ownerState) : slotProps.img,
        src,
        srcSet
    });
    const hasImg = src || srcSet;
    const hasImgNotFailing = hasImg && loaded !== 'error';
    ownerState.colorDefault = !hasImgNotFailing;
    // This issue explains why this is required: https://github.com/mui/material-ui/issues/42184
    delete ownerState.ownerState;
    const classes = useUtilityClasses(ownerState);
    const [RootSlot, rootSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('root', {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        elementType: AvatarRoot,
        externalForwardedProps: {
            slots,
            slotProps,
            component,
            ...other
        },
        ownerState
    });
    const [ImgSlot, imgSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('img', {
        className: classes.img,
        elementType: AvatarImg,
        externalForwardedProps: {
            slots,
            slotProps: {
                img: {
                    ...imgProps,
                    ...slotProps.img
                }
            }
        },
        additionalProps: {
            alt,
            src,
            srcSet,
            sizes
        },
        ownerState
    });
    const [FallbackSlot, fallbackSlotProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fallback', {
        className: classes.fallback,
        elementType: AvatarFallback,
        externalForwardedProps: {
            slots,
            slotProps
        },
        shouldForwardComponentProp: true,
        ownerState
    });
    if (hasImgNotFailing) {
        children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ImgSlot, {
            ...imgSlotProps
        });
    // We only render valid children, non valid children are rendered with a fallback
    // We consider that invalid children are all falsy values, except 0, which is valid.
    } else if (!!childrenProp || childrenProp === 0) {
        children = childrenProp;
    } else if (hasImg && alt) {
        children = alt[0];
    } else {
        children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FallbackSlot, {
            ...fallbackSlotProps
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RootSlot, {
        ...rootSlotProps,
        children: children
    });
});
("TURBOPACK compile-time truthy", 1) ? Avatar.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */ alt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */ imgProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The `sizes` attribute for the `img` element.
   */ sizes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The props used for each slot inside.
   * @default {}
   */ slotProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        fallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        img: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ]),
        root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
        ])
    }),
    /**
   * The components used for each slot inside.
   * @default {}
   */ slots: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
        fallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
        root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
    }),
    /**
   * The `src` attribute for the `img` element.
   */ src: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */ srcSet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The shape of the avatar.
   * @default 'circular'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'circular',
            'rounded',
            'square'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Avatar;
}),
"[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircularProgress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_25f0995b._.js.map