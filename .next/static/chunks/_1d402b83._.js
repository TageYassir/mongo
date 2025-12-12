(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/uis/user-space/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserSpaceLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function UserSpaceLayout(param) {
    let { children } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const hasWindow = "object" !== 'undefined';
    const hasDocument = typeof document !== 'undefined';
    function clearWalletLocalKeysForUser(optionalUserId) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            for(let i = localStorage.length - 1; i >= 0; i--){
                const key = localStorage.key(i);
                if (!key) continue;
                if (optionalUserId) {
                    if (key.startsWith("wallet:".concat(optionalUserId, ":")) || key.startsWith("tx:".concat(optionalUserId)) || key.startsWith("tx:")) {
                        localStorage.removeItem(key);
                    }
                } else {
                    if (key.startsWith('wallet:') || key.startsWith('tx:')) {
                        localStorage.removeItem(key);
                    }
                }
            }
        } catch (e) {
        // ignore storage errors
        }
    }
    function clearUserIdCookie() {
        if (!hasDocument) return;
        try {
            document.cookie = 'userId=; path=/; max-age=0';
        } catch (e) {}
    }
    async function signOut() {
        // best-effort server logout
        try {
            await fetch('/api/users?operation=logout', {
                method: 'POST',
                credentials: 'include'
            }).catch(()=>{});
            await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            }).catch(()=>{});
        } catch (e) {
        // ignore
        }
        // clear client-side markers
        clearUserIdCookie();
        try {
            localStorage.removeItem('userId');
        } catch (e) {}
        // clear wallet & tx local keys
        clearWalletLocalKeysForUser();
        // broadcast logout to other tabs/components
        try {
            localStorage.setItem('user-logout-ts', String(Date.now()));
        } catch (e) {}
        // navigate to homepage or login page
        try {
            router.replace('/');
        } catch (e) {}
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserSpaceLayout.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Expose global helper for existing logout buttons or scripts
            try {
                window.appSignOut = signOut;
            } catch (e) {}
            function onStorage(e) {
                try {
                    if (!e) return;
                    // Another tab broadcasted logout
                    if (e.key === 'user-logout-ts') {
                        clearUserIdCookie();
                        try {
                            localStorage.removeItem('userId');
                        } catch (er) {}
                        clearWalletLocalKeysForUser();
                    // Optionally navigate away:
                    // router.replace('/');
                    }
                    // If userId was removed explicitly in another tab, clear wallet keys too
                    if (e.key === 'userId' && (e.newValue === null || e.newValue === '')) {
                        clearWalletLocalKeysForUser();
                    }
                } catch (err) {
                // ignore
                }
            }
            window.addEventListener('storage', onStorage);
            return ({
                "UserSpaceLayout.useEffect": ()=>{
                    try {
                        delete window.appSignOut;
                    } catch (e) {}
                    window.removeEventListener('storage', onStorage);
                }
            })["UserSpaceLayout.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["UserSpaceLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#fafafa',
                    borderBottom: '1px solid #eee',
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 700
                        },
                        children: "User space"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/layout.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/layout.js",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: signOut,
                        style: {
                            padding: '8px 12px',
                            borderRadius: 6,
                            border: '1px solid #ddd',
                            background: '#fff',
                            cursor: 'pointer',
                            fontSize: 14
                        },
                        children: "Sign out"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/layout.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/user-space/layout.js",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    flex: 1
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/app/uis/user-space/layout.js",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/user-space/layout.js",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(UserSpaceLayout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserSpaceLayout;
var _c;
__turbopack_context__.k.register(_c, "UserSpaceLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1d402b83._.js.map