module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/uis/style.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
;
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#666666',
            contrastText: '#ffffff'
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff'
        },
        text: {
            primary: '#000000',
            secondary: '#444444',
            disabled: '#aaaaaa'
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Arial'
        ].join(','),
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem'
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.3,
            letterSpacing: '-0.015em',
            marginBottom: '1rem'
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4,
            marginBottom: '0.75rem'
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#333333'
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: '#555555'
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
            letterSpacing: '0.01em'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: `
          radial-gradient(at 73% 47%,rgb(245, 243, 243) 0px, transparent 50%),
          radial-gradient(at 24% 72%, #f9fafb 0px, transparent 50%),
          linear-gradient(to bottom right, #ffffff, #f8f9fa)
        `,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    padding: '8px 16px',
                    transition: 'all 0.2s ease',
                    borderWidth: '1px',
                    '&:hover': {
                        backgroundColor: '#f5f5f5'
                    }
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                        backgroundColor: '#111111'
                    }
                },
                outlined: {
                    borderColor: '#e0e0e0',
                    '&:hover': {
                        borderColor: '#cccccc',
                        backgroundColor: 'transparent'
                    }
                },
                text: {
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#333333'
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#000000',
                    textDecoration: 'underline',
                    textDecorationColor: '#e0e0e0',
                    textUnderlineOffset: '3px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        textDecorationColor: '#000000'
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderBottom: '1px solid #eaeaea'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '0',
                    boxShadow: 'none',
                    border: '1px solid #eaeaea',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        borderColor: '#cccccc'
                    }
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderRadius: '0',
                    boxShadow: 'none',
                    border: '1px solid #eaeaea',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        borderColor: '#cccccc'
                    }
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    borderRadius: '0',
                    boxShadow: 'none',
                    border: '1px solid #eaeaea',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        borderColor: '#cccccc'
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '0',
                    boxShadow: 'none',
                    border: '1px solid #eaeaea',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        borderColor: '#cccccc'
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '4px',
                        '& fieldset': {
                            borderColor: '#e0e0e0'
                        },
                        '&:hover fieldset': {
                            borderColor: '#cccccc'
                        }
                    }
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#eaeaea'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    border: '1px solid #eaeaea'
                }
            }
        }
    },
    shape: {
        borderRadius: 4
    },
    spacing: 8
});
const __TURBOPACK__default__export__ = theme;
}),
"[project]/app/uis/layout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/** React Imports */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/** MUI Imports */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
/** Style Import */ var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$uis$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/uis/style.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RootLayout({ children }) {
    async function handleLogout() {
        // discover current user id (same fallback as chat)
        let userId = null;
        try {
            const raw = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch (e) {
            userId = null;
        }
        // Mark user offline on server (best-effort)
        try {
            if (userId) {
                await fetch('/api/users?operation=logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: userId
                    })
                }).catch(()=>{});
            } else {
                // fallback if you have a session endpoint
                await fetch('/api/auth/logout', {
                    method: 'POST'
                }).catch(()=>{});
            }
        } catch (e) {
        // ignore server errors
        // console.warn('logout: server call failed', e)
        }
        // clear client-side stored user info
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch (e) {
        // ignore
        }
        // Final navigation: replace current history entry with /uis so Back can't return
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$uis$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "fr",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                style: {
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: "header",
                        sx: {
                            width: '100%',
                            px: 2,
                            py: 1,
                            borderBottom: 1,
                            borderColor: 'divider',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            onClick: handleLogout,
                            sx: {
                                color: 'error.main',
                                textTransform: 'none',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: 'transparent'
                                }
                            },
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/layout.js",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/layout.js",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/uis/layout.js",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/layout.js",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/uis/layout.js",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/uis/layout.js",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ca022652._.js.map