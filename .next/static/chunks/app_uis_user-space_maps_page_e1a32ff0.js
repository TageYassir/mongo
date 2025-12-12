(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/uis/user-space/maps/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Dynamically import react-leaflet components to avoid SSR issues
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.MapContainer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapContainer;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.TileLayer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = TileLayer;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.Marker), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = Marker;
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.Popup), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = Popup;
// Fix Leaflet default icon paths for Next.js/public
delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
    iconUrl: '/leaflet/images/marker-icon.png',
    shadowUrl: '/leaflet/images/marker-shadow.png'
});
function MapsPage() {
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // { lat, lng }
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Requesting location permission...');
    // Use same pattern as chat to find current user:
    // 1. call server endpoint /api/users?operation=get-current
    // 2. fallback to localStorage 'user' JSON (same as chat)
    async function resolveCurrentUserId() {
        try {
            const res = await fetch('/api/users?operation=get-current');
            if (res.ok) {
                var _payload_user, _payload_user1, _payload_current;
                const payload = await res.json();
                const uid = (payload === null || payload === void 0 ? void 0 : (_payload_user = payload.user) === null || _payload_user === void 0 ? void 0 : _payload_user._id) || (payload === null || payload === void 0 ? void 0 : (_payload_user1 = payload.user) === null || _payload_user1 === void 0 ? void 0 : _payload_user1.id) || (payload === null || payload === void 0 ? void 0 : (_payload_current = payload.current) === null || _payload_current === void 0 ? void 0 : _payload_current.id) || (payload === null || payload === void 0 ? void 0 : payload.id) || null;
                if (uid) return uid;
            }
        } catch (err) {
        // ignore and try fallback
        }
        try {
            const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('user') : "TURBOPACK unreachable";
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed === null || parsed === void 0 ? void 0 : parsed.id) return parsed.id;
            }
        } catch (err) {
        // ignore
        }
        return null;
    }
    async function saveLocationForUser(userId, lat, lng) {
        if (!userId) {
            setStatusMessage('Location available locally (not saved to server - no user id found).');
            return;
        }
        try {
            const res = await fetch("/api/users/".concat(encodeURIComponent(userId), "/location"), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    lat,
                    lng
                })
            });
            if (!res.ok) {
                const body = await res.json().catch(()=>null);
                console.warn('Failed to save location', body);
                setStatusMessage('Location shown locally; failed to save to server.');
                return;
            }
            setStatusMessage('Location saved to server.');
        } catch (err) {
            console.error('saveLocationForUser error', err);
            setStatusMessage('Location shown locally; error saving to server.');
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapsPage.useEffect": ()=>{
            if (!('geolocation' in navigator)) {
                setStatusMessage('Geolocation not supported by your browser.');
                setLoading(false);
                return;
            }
            setStatusMessage('Requesting permission to access your location...');
            navigator.geolocation.getCurrentPosition({
                "MapsPage.useEffect": async (pos)=>{
                    const lat = pos.coords.latitude;
                    const lng = pos.coords.longitude;
                    setPosition({
                        lat,
                        lng
                    });
                    setLoading(false);
                    setStatusMessage('Location obtained.');
                    const uid = await resolveCurrentUserId();
                    await saveLocationForUser(uid, lat, lng);
                }
            }["MapsPage.useEffect"], {
                "MapsPage.useEffect": (err)=>{
                    console.warn('geolocation error', err);
                    if (err.code === err.PERMISSION_DENIED) {
                        setStatusMessage('Permission denied. Allow location to display the map marker.');
                    } else {
                        setStatusMessage('Unable to retrieve your location.');
                    }
                    setLoading(false);
                }
            }["MapsPage.useEffect"], {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            });
        }
    }["MapsPage.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: 16
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Mini-Map"
                }, void 0, false, {
                    fileName: "[project]/app/uis/user-space/maps/page.js",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: statusMessage
                }, void 0, false, {
                    fileName: "[project]/app/uis/user-space/maps/page.js",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/uis/user-space/maps/page.js",
            lineNumber: 116,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Mini-Map"
            }, void 0, false, {
                fileName: "[project]/app/uis/user-space/maps/page.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: statusMessage
            }, void 0, false, {
                fileName: "[project]/app/uis/user-space/maps/page.js",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            !position ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "No location available for this user."
            }, void 0, false, {
                fileName: "[project]/app/uis/user-space/maps/page.js",
                lineNumber: 129,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '70vh',
                    width: '100%',
                    border: '1px solid #ddd'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                    center: [
                        position.lat,
                        position.lng
                    ],
                    zoom: 13,
                    style: {
                        height: '100%',
                        width: '100%'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TileLayer, {
                            attribution: "© OpenStreetMap contributors",
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/maps/page.js",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                            position: [
                                position.lat,
                                position.lng
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popup, {
                                children: "Your current location"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/user-space/maps/page.js",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/maps/page.js",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/user-space/maps/page.js",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/uis/user-space/maps/page.js",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/user-space/maps/page.js",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(MapsPage, "r7tnQiJSKPINuPSaWEb190TBzbE=");
_c4 = MapsPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "TileLayer");
__turbopack_context__.k.register(_c2, "Marker");
__turbopack_context__.k.register(_c3, "Popup");
__turbopack_context__.k.register(_c4, "MapsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_uis_user-space_maps_page_e1a32ff0.js.map