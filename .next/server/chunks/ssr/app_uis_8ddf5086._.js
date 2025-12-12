module.exports = [
"[project]/app/uis/style.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Theme tokens and helper to apply CSS variables at runtime.
// Replace existing style.js with this, or merge tokens into it.
__turbopack_context__.s([
    "applyTheme",
    ()=>applyTheme,
    "default",
    ()=>__TURBOPACK__default__export__,
    "theme",
    ()=>theme
]);
const theme = {
    // Color system (neutral, primary, accent, semantic)
    colors: {
        background: '#F7FAFC',
        surface: '#FFFFFF',
        primary: '#2563EB',
        primaryHover: '#1D4ED8',
        accent: '#06B6D4',
        muted: '#6B7280',
        text: '#0F172A',
        success: '#16A34A',
        danger: '#DC2626',
        border: '#E6E9EE',
        shadow: 'rgba(15,23,42,0.06)'
    },
    // Spacing scale (8px base)
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
    },
    // Typography
    typography: {
        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        baseSize: '16px',
        scale: {
            h1: '24px',
            h2: '20px',
            body: '16px',
            small: '13px'
        },
        lineHeight: {
            normal: 1.5,
            heading: 1.25
        }
    },
    // Border radius and elevation
    radius: {
        sm: '6px',
        md: '10px',
        lg: '14px'
    },
    // Utility sizes
    sizes: {
        headerHeight: '64px',
        containerMax: '1100px'
    }
};
// Apply CSS variables to the document root for CSS consumption
function applyTheme(t = theme) {
    if (typeof document === 'undefined') return; // server-safe
    const root = document.documentElement;
    const set = (key, val)=>root.style.setProperty(`--ui-${key}`, val);
    // colors
    Object.entries(t.colors).forEach(([k, v])=>set(`color-${k}`, v));
    // spacing
    Object.entries(t.spacing).forEach(([k, v])=>set(`space-${k}`, v));
    // typography
    set('font-family', t.typography.fontFamily);
    set('font-base-size', t.typography.baseSize);
    Object.entries(t.typography.scale).forEach(([k, v])=>set(`type-${k}`, v));
    // radius
    Object.entries(t.radius).forEach(([k, v])=>set(`radius-${k}`, v));
    // sizes
    Object.entries(t.sizes).forEach(([k, v])=>set(`size-${k}`, v));
}
;
const __TURBOPACK__default__export__ = theme;
}),
"[project]/app/uis/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simplified layout component that applies theme and provides header/footer
// Replace or merge with your existing layout.js
// This example assumes a React environment. If your app is not React, the styles and CSS variables still apply.
__turbopack_context__.s([
    "PageContainer",
    ()=>PageContainer,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$uis$2f$style$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/uis/style.js [app-rsc] (ecmascript)");
;
;
;
// Apply the theme on import (safe - no-op on server)
(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$uis$2f$style$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyTheme"])();
const Header = ({ title = 'My App' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: styles.header,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.headerInner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.brand,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.logo,
                            "aria-hidden": "true",
                            children: "🔷"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/layout.js",
                            lineNumber: 16,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/uis/layout.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/layout.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    style: styles.nav,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/",
                            style: styles.navLink,
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/layout.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/user",
                            style: styles.navLink,
                            children: "Account"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/layout.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/layout.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/uis/layout.js",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/uis/layout.js",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Footer = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: styles.footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.footerInner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Your Company"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/layout.js",
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: 'var(--ui-color-muted)',
                        fontSize: '13px'
                    },
                    children: "Built with care • Secure by default"
                }, void 0, false, {
                    fileName: "[project]/app/uis/layout.js",
                    lineNumber: 32,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/uis/layout.js",
            lineNumber: 30,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/uis/layout.js",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const PageContainer = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.app,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                title: "Mongo UI"
            }, void 0, false, {
                fileName: "[project]/app/uis/layout.js",
                lineNumber: 39,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: styles.main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.container,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/uis/layout.js",
                    lineNumber: 41,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/uis/layout.js",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/app/uis/layout.js",
                lineNumber: 43,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/layout.js",
        lineNumber: 38,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// Minimal inline styles using CSS variables for quick adoption; pages can use CSS or styled-components
const styles = {
    app: {
        fontFamily: 'var(--ui-font-family, Inter, system-ui, sans-serif)',
        background: 'var(--ui-color-background)',
        color: 'var(--ui-color-text)',
        minHeight: '100vh',
        WebkitFontSmoothing: 'antialiased'
    },
    header: {
        height: 'var(--ui-size-headerHeight)',
        background: 'var(--ui-color-surface)',
        borderBottom: '1px solid var(--ui-color-border)',
        boxShadow: '0 1px 4px var(--ui-color-shadow)',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 50
    },
    headerInner: {
        maxWidth: 'var(--ui-size-containerMax)',
        margin: '0 auto',
        width: '100%',
        padding: '0 var(--ui-space-md)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    logo: {
        width: 36,
        height: 36,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        background: 'linear-gradient(180deg, var(--ui-color-primary), var(--ui-color-primaryHover))',
        color: 'white',
        fontSize: 18
    },
    title: {
        fontSize: '18px',
        fontWeight: 600
    },
    nav: {
        display: 'flex',
        gap: '12px'
    },
    navLink: {
        color: 'var(--ui-color-muted)',
        textDecoration: 'none',
        fontSize: '14px',
        padding: '6px 8px',
        borderRadius: '6px'
    },
    main: {
        padding: 'var(--ui-space-lg) 0'
    },
    container: {
        maxWidth: 'var(--ui-size-containerMax)',
        margin: '0 auto',
        padding: `0 var(--ui-space-md)`
    },
    footer: {
        borderTop: '1px solid var(--ui-color-border)',
        background: 'transparent',
        padding: 'var(--ui-space-sm) 0',
        marginTop: 'var(--ui-space-lg)'
    },
    footerInner: {
        maxWidth: 'var(--ui-size-containerMax)',
        margin: '0 auto',
        padding: `0 var(--ui-space-md)`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--ui-color-muted)'
    }
};
const __TURBOPACK__default__export__ = PageContainer;
}),
];

//# sourceMappingURL=app_uis_8ddf5086._.js.map