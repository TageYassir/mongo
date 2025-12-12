(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/uis/all-users/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AllUsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItem/ListItem.js [app-client] (ecmascript) <export default as ListItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemAvatar$2f$ListItemAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemAvatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js [app-client] (ecmascript) <export default as ListItemAvatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__colors$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/colors/index.js [app-client] (ecmascript) <export * as colors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Clear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function AllUsersPage() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // friends state
    const [friends, setFriends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingFriends, setLoadingFriends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [friendIds, setFriendIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Try to obtain current user id from localStorage (common patterns)
    const getCurrentUserId = ()=>{
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // common: a full user object stored under 'user' or 'currentUser'
            const userRaw = window.localStorage.getItem('user') || window.localStorage.getItem('currentUser');
            if (userRaw) {
                try {
                    const u = JSON.parse(userRaw);
                    if (u && (u._id || u.id)) return u._id || u.id;
                } catch (e) {
                // not JSON - maybe it's the id string
                }
            }
            // direct id keys
            const idDirect = window.localStorage.getItem('currentUserId') || window.localStorage.getItem('userId');
            if (idDirect) return idDirect;
            return null;
        } catch (e) {
            return null;
        }
    };
    const currentUserId = getCurrentUserId();
    async function fetchUsers() {
        let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        setLoading(true);
        setError(null);
        try {
            const url = "/api/users?operation=get-all-users".concat(q ? "&q=".concat(encodeURIComponent(q)) : "");
            const res = await fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const payload = await res.json();
            if (!res.ok) {
                setError((payload === null || payload === void 0 ? void 0 : payload.error) || "Server returned ".concat(res.status));
                setUsers([]);
            } else {
                const list = Array.isArray(payload.users) ? payload.users : [];
                setUsers(list);
            }
        } catch (err) {
            setError(err.message || "Failed to load users");
            setUsers([]);
        } finally{
            setLoading(false);
        }
    }
    async function fetchFriendsForCurrentUser() {
        if (!currentUserId) {
            setFriends([]);
            setFriendIds(new Set());
            return;
        }
        setLoadingFriends(true);
        try {
            const url = "/api/friends?operation=get-friends&userId=".concat(encodeURIComponent(currentUserId));
            const res = await fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const payload = await res.json().catch(()=>null);
            if (!res.ok) {
                console.warn('Failed to fetch friends:', (payload === null || payload === void 0 ? void 0 : payload.error) || res.status);
                setFriends([]);
                setFriendIds(new Set());
            } else {
                const list = Array.isArray(payload.friends) ? payload.friends : [];
                setFriends(list);
                const ids = new Set(list.map((u)=>u._id || u.id).filter(Boolean));
                setFriendIds(ids);
            }
        } catch (e) {
            console.warn('Failed to fetch friends', e);
            setFriends([]);
            setFriendIds(new Set());
        } finally{
            setLoadingFriends(false);
        }
    }
    // initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllUsersPage.useEffect": ()=>{
            fetchUsers("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AllUsersPage.useEffect"], []);
    // fetch friends when component mounts (and when currentUserId changes)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllUsersPage.useEffect": ()=>{
            fetchFriendsForCurrentUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AllUsersPage.useEffect"], [
        currentUserId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllUsersPage.useEffect": ()=>{
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout({
                "AllUsersPage.useEffect": ()=>{
                    fetchUsers(query.trim());
                }
            }["AllUsersPage.useEffect"], 350);
            return ({
                "AllUsersPage.useEffect": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                }
            })["AllUsersPage.useEffect"];
        }
    }["AllUsersPage.useEffect"], [
        query
    ]);
    const handleClear = ()=>setQuery("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (debounceRef.current) clearTimeout(debounceRef.current);
        fetchUsers(query.trim());
    };
    // Navigate to direct chat path (dynamic route)
    const navigateToChatWith = (id)=>{
        if (!id) return;
        router.push("/uis/chat/".concat(encodeURIComponent(id)));
    };
    // Navigate to the user's profile inside the user-space
    const navigateToUserProfile = (id)=>{
        if (!id) return;
        router.push("/uis/user-space/profile/".concat(encodeURIComponent(id)));
    };
    // Navigate specifically to the "friend" profile page (folder: [id]/friend/page.js)
    const navigateToFriendProfile = (id)=>{
        if (!id) return;
        router.push("/uis/user-space/profile/".concat(encodeURIComponent(id), "/friend"));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        maxWidth: "md",
        sx: {
            py: 3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h5",
                        children: "All Users"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/all-users/page.js",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/uis/user-space",
                        passHref: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            size: "small",
                            variant: "contained",
                            children: "Back to User Space"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/all-users/page.js",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/all-users/page.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/all-users/page.js",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            currentUserId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "subtitle1",
                        sx: {
                            mb: 1,
                            fontWeight: 600
                        },
                        children: "Friends"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/all-users/page.js",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                        elevation: 1,
                        sx: {
                            p: 1,
                            mb: 1
                        },
                        children: loadingFriends ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: 'flex',
                                justifyContent: 'center',
                                py: 2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/uis/all-users/page.js",
                                lineNumber: 167,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/all-users/page.js",
                            lineNumber: 166,
                            columnNumber: 15
                        }, this) : friends.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                p: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                children: "No friends to show."
                            }, void 0, false, {
                                fileName: "[project]/app/uis/all-users/page.js",
                                lineNumber: 171,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/all-users/page.js",
                            lineNumber: 170,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            direction: "row",
                            spacing: 1,
                            sx: {
                                overflowX: 'auto',
                                py: 1
                            },
                            children: friends.map((f)=>{
                                const id = f._id || f.id || null;
                                const displayName = f.pseudo || [
                                    f.firstName,
                                    f.lastName
                                ].filter(Boolean).join(" ") || "Unknown";
                                const initial = (displayName.charAt(0) || "?").toUpperCase();
                                const bg = f.gender === "Male" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__colors$3e$__["colors"].blue[800] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__colors$3e$__["colors"].red[600];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                    sx: {
                                        minWidth: 160,
                                        p: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                            sx: {
                                                bgcolor: bg,
                                                width: 40,
                                                height: 40
                                            },
                                            children: initial
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/all-users/page.js",
                                            lineNumber: 182,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        fontSize: 13,
                                                        fontWeight: 600
                                                    },
                                                    children: displayName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/all-users/page.js",
                                                    lineNumber: 184,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        display: 'flex',
                                                        gap: 1,
                                                        mt: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            size: "small",
                                                            variant: "outlined",
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                navigateToChatWith(id);
                                                            },
                                                            children: "Message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/uis/all-users/page.js",
                                                            lineNumber: 187,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            size: "small",
                                                            variant: "outlined",
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                navigateToFriendProfile(id);
                                                            },
                                                            "aria-label": "Visit profile of ".concat(displayName),
                                                            children: "Visit Profil"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/uis/all-users/page.js",
                                                            lineNumber: 194,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/uis/all-users/page.js",
                                                    lineNumber: 186,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/all-users/page.js",
                                            lineNumber: 183,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, id || Math.random(), true, {
                                    fileName: "[project]/app/uis/all-users/page.js",
                                    lineNumber: 181,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/uis/all-users/page.js",
                            lineNumber: 174,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/all-users/page.js",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/all-users/page.js",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: "form",
                onSubmit: handleSubmit,
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                    fullWidth: true,
                    placeholder: "Search by name or pseudo...",
                    value: query,
                    onChange: (e)=>setQuery(e.target.value),
                    variant: "outlined",
                    InputProps: {
                        endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                            position: "end",
                            children: query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: ()=>setQuery(""),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/uis/all-users/page.js",
                                    lineNumber: 224,
                                    columnNumber: 73
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/uis/all-users/page.js",
                                lineNumber: 224,
                                columnNumber: 19
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/uis/all-users/page.js",
                                lineNumber: 226,
                                columnNumber: 19
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/all-users/page.js",
                            lineNumber: 222,
                            columnNumber: 15
                        }, void 0)
                    }
                }, void 0, false, {
                    fileName: "[project]/app/uis/all-users/page.js",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/uis/all-users/page.js",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                elevation: 2,
                sx: {
                    height: "75vh",
                    overflowY: "auto",
                    p: 1
                },
                children: [
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            py: 4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {}, void 0, false, {
                            fileName: "[project]/app/uis/all-users/page.js",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/all-users/page.js",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            p: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            color: "error",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/uis/all-users/page.js",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/all-users/page.js",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    !loading && !error && users.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            p: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            children: "No users found."
                        }, void 0, false, {
                            fileName: "[project]/app/uis/all-users/page.js",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/all-users/page.js",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this),
                    !loading && !error && users.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                        children: users.map((u)=>{
                            const id = u._id || u.id || null;
                            // compute a display name without using email
                            const displayName = u.pseudo || [
                                u.firstName,
                                u.lastName
                            ].filter(Boolean).join(" ") || "Unknown";
                            const initial = (displayName.charAt(0) || "?").toUpperCase();
                            const bg = u.gender === "Male" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__colors$3e$__["colors"].blue[800] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__colors$3e$__["colors"].red[600];
                            // only show non-email info
                            const subtitleParts = [];
                            if (u.country) subtitleParts.push(u.country);
                            const subtitle = subtitleParts.join(" • ");
                            const handleOpenConversation = ()=>navigateToChatWith(id);
                            // Contact button now opens the user's profile in user-space (if not friend)
                            const handleContactClick = (e)=>{
                                e.stopPropagation();
                                navigateToUserProfile(id);
                            };
                            const isFriend = id && friendIds.has(id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                sx: {
                                    mb: 1,
                                    cursor: id ? "pointer" : "default"
                                },
                                role: "button",
                                tabIndex: id ? 0 : -1,
                                onClick: id ? handleOpenConversation : undefined,
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" && id) handleOpenConversation();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__["ListItem"], {
                                    secondaryAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1
                                        },
                                        children: isFriend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: 'flex',
                                                gap: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    size: "small",
                                                    variant: "contained",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        navigateToChatWith(id);
                                                    },
                                                    disabled: !id,
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/all-users/page.js",
                                                    lineNumber: 287,
                                                    columnNumber: 29
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    size: "small",
                                                    variant: "outlined",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        navigateToFriendProfile(id);
                                                    },
                                                    disabled: !id,
                                                    "aria-label": "Visit profile of ".concat(displayName),
                                                    children: "Visit Profil"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/all-users/page.js",
                                                    lineNumber: 295,
                                                    columnNumber: 29
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/uis/all-users/page.js",
                                            lineNumber: 286,
                                            columnNumber: 27
                                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            size: "small",
                                            variant: "outlined",
                                            onClick: handleContactClick,
                                            disabled: !id,
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/all-users/page.js",
                                            lineNumber: 306,
                                            columnNumber: 27
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/uis/all-users/page.js",
                                        lineNumber: 283,
                                        columnNumber: 23
                                    }, void 0),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemAvatar$2f$ListItemAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemAvatar$3e$__["ListItemAvatar"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                                sx: {
                                                    bgcolor: bg
                                                },
                                                children: initial
                                            }, void 0, false, {
                                                fileName: "[project]/app/uis/all-users/page.js",
                                                lineNumber: 314,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/all-users/page.js",
                                            lineNumber: 313,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                            primary: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "subtitle1",
                                                    sx: {
                                                        fontWeight: 600
                                                    },
                                                    children: displayName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/all-users/page.js",
                                                    lineNumber: 320,
                                                    columnNumber: 27
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/uis/all-users/page.js",
                                                lineNumber: 319,
                                                columnNumber: 25
                                            }, void 0),
                                            secondary: subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/all-users/page.js",
                                            lineNumber: 317,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/uis/all-users/page.js",
                                    lineNumber: 281,
                                    columnNumber: 19
                                }, this)
                            }, id || "".concat(u.pseudo || u.firstName || 'user', "-").concat(Math.random()), false, {
                                fileName: "[project]/app/uis/all-users/page.js",
                                lineNumber: 273,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/uis/all-users/page.js",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/all-users/page.js",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/all-users/page.js",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(AllUsersPage, "Q5G3prbxuZcx6M0pU88lPUJDr7I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AllUsersPage;
var _c;
__turbopack_context__.k.register(_c, "AllUsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_uis_all-users_page_d1236213.js.map