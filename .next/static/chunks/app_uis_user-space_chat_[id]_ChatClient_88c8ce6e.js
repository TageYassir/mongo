(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/uis/user-space/chat/[id]/ChatClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItem/ListItem.js [app-client] (ecmascript) <export default as ListItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Mic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Stop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PlayArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PlayArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Pause.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VolumeUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/VolumeUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/MoreVert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Download.js [app-client] (ecmascript)");
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
;
;
;
;
function ChatClient(param) {
    let { receiver: receiverFromServer = null, receiverId: receiverProp = null } = param;
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const receiverFromQuery = searchParams ? searchParams.get("receiver") : null;
    const params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])() : {};
    var _params_id;
    const routeId = (_params_id = params === null || params === void 0 ? void 0 : params.id) !== null && _params_id !== void 0 ? _params_id : null;
    const receiverId = receiverFromServer ? receiverFromServer._id || receiverFromServer.id || null : receiverProp || receiverFromQuery || routeId || null;
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [receiver, setReceiver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(receiverFromServer || null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingMessages, setLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // recording state
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordedChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const activeStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // recording timer
    const [recordElapsedMs, setRecordElapsedMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const recordIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // upload state
    const [uploadingAudio, setUploadingAudio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // preview state
    const [previewImageUrl, setPreviewImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewFilename, setPreviewFilename] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatClient.useEffect": ()=>{
            async function loadCurrentUser() {
                try {
                    const res = await fetch("/api/users?operation=get-current");
                    if (res.ok) {
                        var _payload_user, _payload_user1, _payload_current;
                        const payload = await res.json();
                        const uid = (payload === null || payload === void 0 ? void 0 : (_payload_user = payload.user) === null || _payload_user === void 0 ? void 0 : _payload_user._id) || (payload === null || payload === void 0 ? void 0 : (_payload_user1 = payload.user) === null || _payload_user1 === void 0 ? void 0 : _payload_user1.id) || (payload === null || payload === void 0 ? void 0 : (_payload_current = payload.current) === null || _payload_current === void 0 ? void 0 : _payload_current.id) || (payload === null || payload === void 0 ? void 0 : payload.id) || null;
                        if (uid) {
                            setCurrentUserId(uid);
                            try {
                                const r2 = await fetch("/api/users/".concat(encodeURIComponent(uid)));
                                if (r2.ok) {
                                    const p2 = await r2.json();
                                    var _p2_user;
                                    const usr = (_p2_user = p2 === null || p2 === void 0 ? void 0 : p2.user) !== null && _p2_user !== void 0 ? _p2_user : p2;
                                    setCurrentUser(usr || null);
                                    return;
                                }
                            } catch (e) {}
                            setCurrentUser((payload === null || payload === void 0 ? void 0 : payload.user) || null);
                            return;
                        }
                    }
                } catch (e) {
                // fallback to localStorage
                }
                try {
                    const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('user') : "TURBOPACK unreachable";
                    if (raw) {
                        const parsed = JSON.parse(raw);
                        if (parsed === null || parsed === void 0 ? void 0 : parsed.id) {
                            setCurrentUserId(parsed.id);
                            setCurrentUser(parsed);
                        }
                    }
                } catch (e) {}
            }
            loadCurrentUser();
        }
    }["ChatClient.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatClient.useEffect": ()=>{
            async function fetchConversation() {
                if (!receiverId) return;
                let userA = currentUserId;
                if (!userA) {
                    try {
                        const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("user") : "TURBOPACK unreachable";
                        if (raw) {
                            const parsed = JSON.parse(raw);
                            if (parsed === null || parsed === void 0 ? void 0 : parsed.id) userA = parsed.id;
                        }
                    } catch (e) {}
                }
                if (!userA) return;
                setLoadingMessages(true);
                setError(null);
                try {
                    const url = "/api/messages?operation=get-conversation&userA=".concat(encodeURIComponent(userA), "&userB=").concat(encodeURIComponent(receiverId));
                    const res = await fetch(url);
                    if (!res.ok) {
                        const payload = await res.json().catch({
                            "ChatClient.useEffect.fetchConversation": ()=>null
                        }["ChatClient.useEffect.fetchConversation"]);
                        setError((payload === null || payload === void 0 ? void 0 : payload.error) || "Server returned ".concat(res.status));
                        setMessages([]);
                    } else {
                        const payload = await res.json();
                        const msgs = Array.isArray(payload === null || payload === void 0 ? void 0 : payload.messages) ? payload.messages : [];
                        setMessages(msgs);
                        setTimeout({
                            "ChatClient.useEffect.fetchConversation": ()=>scrollToBottom()
                        }["ChatClient.useEffect.fetchConversation"], 50);
                    }
                } catch (err) {
                    setError(err.message || "Failed to load conversation");
                } finally{
                    setLoadingMessages(false);
                }
            }
            fetchConversation();
        }
    }["ChatClient.useEffect"], [
        currentUserId,
        receiverId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatClient.useEffect": ()=>{
            // cleanup on unmount
            return ({
                "ChatClient.useEffect": ()=>{
                    try {
                        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
                            mediaRecorderRef.current.stop();
                        }
                    } catch (e) {}
                    try {
                        if (activeStreamRef.current) {
                            activeStreamRef.current.getTracks().forEach({
                                "ChatClient.useEffect": (t)=>t.stop()
                            }["ChatClient.useEffect"]);
                        }
                    } catch (e) {}
                    if (recordIntervalRef.current) {
                        clearInterval(recordIntervalRef.current);
                        recordIntervalRef.current = null;
                    }
                }
            })["ChatClient.useEffect"];
        }
    }["ChatClient.useEffect"], []);
    const scrollToBottom = ()=>{
        try {
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "end"
                });
            }
        } catch (e) {}
    };
    function formatElapsed(ms) {
        const totalSec = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSec / 60).toString().padStart(2, '0');
        const seconds = (totalSec % 60).toString().padStart(2, '0');
        return "".concat(minutes, ":").concat(seconds);
    }
    // format seconds (used for audio playback times which are in seconds)
    function formatSeconds(secs) {
        const totalSec = Math.max(0, Math.floor(secs || 0));
        const minutes = Math.floor(totalSec / 60).toString().padStart(2, '0');
        const seconds = (totalSec % 60).toString().padStart(2, '0');
        return "".concat(minutes, ":").concat(seconds);
    }
    async function uploadFile(file) {
        try {
            const fd = new FormData();
            fd.append("file", file);
            const res = await fetch("/api/messages/upload", {
                method: "POST",
                body: fd
            });
            if (!res.ok) {
                const body = await res.json().catch(()=>null);
                throw new Error((body === null || body === void 0 ? void 0 : body.error) || "Upload failed (".concat(res.status, ")"));
            }
            const payload = await res.json();
            return (payload === null || payload === void 0 ? void 0 : payload.file) || null;
        } catch (err) {
            console.error("uploadFile", err);
            throw err;
        }
    }
    async function handleFileSend(file) {
        let forcedType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (!file) return;
        try {
            const baseType = forcedType || (file.type ? file.type.startsWith('audio/') ? 'audio' : file.type.startsWith('image/') ? 'image' : 'file' : 'file');
            if (baseType === 'audio') setUploadingAudio(true);
            const uploaded = await uploadFile(file);
            if (!(uploaded === null || uploaded === void 0 ? void 0 : uploaded.url)) throw new Error("Upload did not return url");
            const senderIdFinal = currentUserId || "object" !== 'undefined' && JSON.parse(localStorage.getItem("user") || "{}").id;
            const payload = {
                senderId: senderIdFinal,
                receiverId,
                text: "",
                sentAt: new Date().toISOString(),
                attachments: [
                    {
                        type: baseType,
                        url: uploaded.url,
                        filename: uploaded.filename || file.name,
                        size: uploaded.size,
                        mimeType: uploaded.type || file.type
                    }
                ]
            };
            const r = await fetch("/api/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (r.ok) {
                const p = await r.json();
                setMessages((m)=>[
                        ...m,
                        (p === null || p === void 0 ? void 0 : p.message) || payload
                    ]);
                setTimeout(()=>scrollToBottom(), 50);
            } else {
                const p = await r.json().catch(()=>null);
                setError((p === null || p === void 0 ? void 0 : p.error) || "Server returned ".concat(r.status));
            }
        } catch (err) {
            console.error("file send error", err);
            setError(err.message || "File upload failed");
        } finally{
            setUploadingAudio(false);
        }
    }
    // Recording voice message with timer and upload as audio
    async function startRecording() {
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            activeStreamRef.current = stream;
            const options = {};
            if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported) {
                if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) options.mimeType = 'audio/webm;codecs=opus';
                else if (MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')) options.mimeType = 'audio/ogg;codecs=opus';
                else if (MediaRecorder.isTypeSupported('audio/mp4')) options.mimeType = 'audio/mp4';
            }
            const mediaRecorder = new MediaRecorder(stream, options);
            recordedChunksRef.current = [];
            mediaRecorder.addEventListener("dataavailable", (ev)=>{
                if (ev.data && ev.data.size > 0) recordedChunksRef.current.push(ev.data);
            });
            mediaRecorder.addEventListener("stop", async ()=>{
                try {
                    const mime = mediaRecorder.mimeType || recordedChunksRef.current[0] && recordedChunksRef.current[0].type || 'audio/webm';
                    const blob = new Blob(recordedChunksRef.current, {
                        type: mime
                    });
                    let ext = 'webm';
                    if (mime.includes('ogg')) ext = 'ogg';
                    else if (mime.includes('mp4') || mime.includes('mpeg')) ext = 'm4a';
                    const file = new File([
                        blob
                    ], "voice-".concat(Date.now(), ".").concat(ext), {
                        type: mime
                    });
                    await handleFileSend(file, "audio");
                } catch (err) {
                    console.error("record stop error", err);
                    setError("Recording failed.");
                } finally{
                    setRecording(false);
                    setRecordElapsedMs(0);
                    try {
                        if (activeStreamRef.current) activeStreamRef.current.getTracks().forEach((t)=>t.stop());
                    } catch (e) {}
                    activeStreamRef.current = null;
                    if (recordIntervalRef.current) {
                        clearInterval(recordIntervalRef.current);
                        recordIntervalRef.current = null;
                    }
                }
            });
            mediaRecorderRef.current = mediaRecorder;
            mediaRecorder.start();
            recordStartRef.current = Date.now();
            setRecordElapsedMs(0);
            if (recordIntervalRef.current) clearInterval(recordIntervalRef.current);
            recordIntervalRef.current = setInterval(()=>{
                setRecordElapsedMs(Date.now() - recordStartRef.current);
            }, 200);
            setRecording(true);
        } catch (err) {
            console.error("startRecording error", err);
            setError("Could not start audio recording (permission denied or unsupported).");
            setRecording(false);
        }
    }
    function stopRecording() {
        try {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
                mediaRecorderRef.current.stop();
            } else {
                setRecording(false);
                setRecordElapsedMs(0);
                try {
                    if (activeStreamRef.current) activeStreamRef.current.getTracks().forEach((t)=>t.stop());
                } catch (e) {}
                activeStreamRef.current = null;
                if (recordIntervalRef.current) {
                    clearInterval(recordIntervalRef.current);
                    recordIntervalRef.current = null;
                }
            }
        } catch (e) {
            console.error("stopRecording error", e);
        }
    }
    function onFileInputChange(e) {
        const f = e.target.files && e.target.files[0];
        if (f) {
            const detected = f.type ? f.type.startsWith('audio/') ? 'audio' : f.type.startsWith('image/') ? 'image' : 'file' : 'file';
            handleFileSend(f, detected);
        }
        e.target.value = null;
    }
    function openPreview(url, filename) {
        setPreviewImageUrl(url);
        setPreviewFilename(filename || null);
    }
    async function downloadFile(url) {
        let filename = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'file';
        try {
            const a = document.createElement('a');
            a.href = url;
            a.download = filename || '';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (e) {
            try {
                const res = await fetch(url);
                const blob = await res.blob();
                const blobUrl = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = filename || 'file';
                document.body.appendChild(a);
                a.click();
                a.remove();
                setTimeout(()=>URL.revokeObjectURL(blobUrl), 1000);
            } catch (err) {
                console.error('download failed', err);
                setError('Download failed');
            }
        }
    }
    // Restore handleSend (simple text send)
    async function handleSend() {
        if (!text || text.trim() === "") {
            // avoid sending empty messages
            setError("Can't send an empty message.");
            return;
        }
        if (!receiverId) {
            setError("No receiver selected.");
            return;
        }
        setSending(true);
        setError(null);
        const sentAt = new Date().toISOString();
        let senderIdFinal = currentUserId;
        if (!senderIdFinal) {
            try {
                const raw = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("user") : "TURBOPACK unreachable";
                if (raw) {
                    const parsed = JSON.parse(raw);
                    senderIdFinal = (parsed === null || parsed === void 0 ? void 0 : parsed.id) || null;
                }
            } catch (e) {}
        }
        if (!senderIdFinal) {
            setError("Unable to determine current user id. Please login again.");
            setSending(false);
            return;
        }
        const messagePayload = {
            senderId: senderIdFinal,
            receiverId,
            text: text.trim() || "",
            sentAt,
            attachments: []
        };
        try {
            const res = await fetch("/api/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messagePayload)
            });
            if (res.ok) {
                const payload = await res.json();
                const saved = (payload === null || payload === void 0 ? void 0 : payload.message) || messagePayload;
                setMessages((m)=>[
                        ...m,
                        saved
                    ]);
                setText("");
                setTimeout(()=>scrollToBottom(), 50);
            } else {
                const payload = await res.json().catch(()=>null);
                setError((payload === null || payload === void 0 ? void 0 : payload.error) || "Server returned ".concat(res.status));
            }
        } catch (err) {
            console.error("send message error", err);
            setError("Failed to send message");
        } finally{
            setSending(false);
        }
    }
    // Compact WhatsApp-like audio UI used inside message bubbles.
    function VoiceBubble(param) {
        let { src, filename } = param;
        _s1();
        const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
        const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
        const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const [muted, setMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const draggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
        // menu + playback speed state
        const [menuAnchor, setMenuAnchor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
        const [playbackSpeed, setPlaybackSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.0);
        const speeds = [
            0.5,
            0.75,
            1,
            1.25,
            1.5,
            2
        ];
        const openMenu = (e)=>setMenuAnchor(e.currentTarget);
        const closeMenu = ()=>setMenuAnchor(null);
        const onSelectSpeed = (s)=>{
            setPlaybackSpeed(s);
            closeMenu();
        };
        const onDownload = ()=>{
            closeMenu();
            downloadFile(src, filename || "audio-".concat(Date.now(), ".webm"));
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "ChatClient.VoiceBubble.useEffect": ()=>{
                const a = new Audio(src);
                a.preload = 'metadata';
                audioRef.current = a;
                a.playbackRate = playbackSpeed;
                const onLoaded = {
                    "ChatClient.VoiceBubble.useEffect.onLoaded": ()=>setDuration(a.duration || 0)
                }["ChatClient.VoiceBubble.useEffect.onLoaded"];
                const onTime = {
                    "ChatClient.VoiceBubble.useEffect.onTime": ()=>{
                        if (!draggingRef.current) setCurrent(a.currentTime);
                    }
                }["ChatClient.VoiceBubble.useEffect.onTime"];
                const onEnd = {
                    "ChatClient.VoiceBubble.useEffect.onEnd": ()=>{
                        setPlaying(false);
                        setCurrent(a.duration || 0);
                    }
                }["ChatClient.VoiceBubble.useEffect.onEnd"];
                a.addEventListener('loadedmetadata', onLoaded);
                a.addEventListener('timeupdate', onTime);
                a.addEventListener('ended', onEnd);
                return ({
                    "ChatClient.VoiceBubble.useEffect": ()=>{
                        try {
                            a.pause();
                            a.removeEventListener('loadedmetadata', onLoaded);
                            a.removeEventListener('timeupdate', onTime);
                            a.removeEventListener('ended', onEnd);
                        } catch (e) {}
                    }
                })["ChatClient.VoiceBubble.useEffect"];
            }
        }["ChatClient.VoiceBubble.useEffect"], [
            src
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "ChatClient.VoiceBubble.useEffect": ()=>{
                if (audioRef.current) audioRef.current.playbackRate = playbackSpeed;
            }
        }["ChatClient.VoiceBubble.useEffect"], [
            playbackSpeed
        ]);
        const togglePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "ChatClient.VoiceBubble.useCallback[togglePlay]": async ()=>{
                if (!audioRef.current) return;
                try {
                    audioRef.current.playbackRate = playbackSpeed;
                    if (playing) {
                        audioRef.current.pause();
                        setPlaying(false);
                    } else {
                        await audioRef.current.play();
                        setPlaying(true);
                    }
                } catch (e) {
                    console.error("play error", e);
                    setError("Playback failed.");
                }
            }
        }["ChatClient.VoiceBubble.useCallback[togglePlay]"], [
            playing,
            playbackSpeed
        ]);
        const toggleMute = ()=>{
            if (!audioRef.current) return;
            audioRef.current.muted = !audioRef.current.muted;
            setMuted(audioRef.current.muted);
        };
        const getClientX = (e)=>e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX;
        const onProgressClick = (e)=>{
            if (!audioRef.current || !progressRef.current) return;
            const rect = progressRef.current.getBoundingClientRect();
            const x = getClientX(e) - rect.left;
            const ratio = Math.max(0, Math.min(1, x / rect.width));
            const newTime = ratio * (duration || 0);
            audioRef.current.currentTime = newTime;
            setCurrent(newTime);
        };
        const onDragStart = (e)=>{
            draggingRef.current = true;
            e.preventDefault();
        };
        const onDragMove = (e)=>{
            if (!draggingRef.current || !progressRef.current) return;
            const clientX = getClientX(e);
            const rect = progressRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const ratio = Math.max(0, Math.min(1, x / rect.width));
            const newTime = ratio * (duration || 0);
            setCurrent(newTime);
        };
        const onDragEnd = (e)=>{
            if (!draggingRef.current || !progressRef.current || !audioRef.current) {
                draggingRef.current = false;
                return;
            }
            const clientX = getClientX(e);
            const rect = progressRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const ratio = Math.max(0, Math.min(1, x / rect.width));
            const newTime = ratio * (duration || 0);
            audioRef.current.currentTime = newTime;
            setCurrent(newTime);
            draggingRef.current = false;
        };
        const progressPct = duration ? Math.min(100, Math.max(0, current / duration * 100)) : 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        bgcolor: '#dcf8c6',
                        borderRadius: '18px',
                        px: 1.25,
                        py: 0.75,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        minWidth: 260,
                        maxWidth: {
                            xs: '95vw',
                            sm: 520
                        },
                        boxShadow: '0 1px 0 rgba(0,0,0,0.06)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "medium",
                            onClick: togglePlay,
                            sx: {
                                p: 0.5
                            },
                            children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "medium"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                lineNumber: 513,
                                columnNumber: 24
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PlayArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "medium"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                lineNumber: 513,
                                columnNumber: 58
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                width: 10,
                                height: 10,
                                bgcolor: '#000',
                                borderRadius: '50%'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            ref: progressRef,
                            onClick: onProgressClick,
                            onMouseDown: onDragStart,
                            onMouseMove: (e)=>{
                                if (draggingRef.current) onDragMove(e);
                            },
                            onMouseUp: onDragEnd,
                            onTouchStart: onDragStart,
                            onTouchMove: onDragMove,
                            onTouchEnd: onDragEnd,
                            sx: {
                                height: 10,
                                bgcolor: 'rgba(0,0,0,0.06)',
                                borderRadius: 6,
                                flex: 1,
                                position: 'relative',
                                cursor: 'pointer',
                                overflow: 'visible'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: "".concat(progressPct, "%"),
                                        bgcolor: 'rgba(0,0,0,0.38)',
                                        transition: 'width 100ms linear',
                                        borderRadius: 6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                    lineNumber: 539,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    onMouseDown: onDragStart,
                                    onTouchStart: onDragStart,
                                    onMouseMove: (e)=>{
                                        if (draggingRef.current) onDragMove(e);
                                    },
                                    onTouchMove: onDragMove,
                                    onMouseUp: onDragEnd,
                                    onTouchEnd: onDragEnd,
                                    sx: {
                                        position: 'absolute',
                                        left: "".concat(progressPct, "%"),
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 14,
                                        height: 14,
                                        bgcolor: '#fff',
                                        border: '2px solid rgba(0,0,0,0.4)',
                                        borderRadius: '50%',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                                        touchAction: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 520,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "small",
                            onClick: toggleMute,
                            sx: {
                                p: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VolumeUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "small"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                lineNumber: 565,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "small",
                            sx: {
                                p: 0.5
                            },
                            onClick: openMenu,
                            "aria-controls": menuAnchor ? 'voice-menu' : undefined,
                            "aria-haspopup": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$MoreVert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "small"
                            }, void 0, false, {
                                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                lineNumber: 570,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            id: "voice-menu",
                            anchorEl: menuAnchor,
                            open: Boolean(menuAnchor),
                            onClose: closeMenu,
                            children: [
                                speeds.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        selected: s === playbackSpeed,
                                        onClick: ()=>onSelectSpeed(s),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                            children: "".concat(s, "x")
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this)
                                    }, s, false, {
                                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                        lineNumber: 574,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                    onClick: onDownload,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                fontSize: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                                lineNumber: 579,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                            lineNumber: 579,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                            children: "Download"
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                            lineNumber: 580,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                    lineNumber: 578,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                ml: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "caption",
                                sx: {
                                    fontSize: 12
                                },
                                children: [
                                    playbackSpeed,
                                    "x"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                lineNumber: 585,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                    lineNumber: 498,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "caption",
                    color: "text.secondary",
                    sx: {
                        mt: 0.5
                    },
                    children: [
                        formatSeconds(current),
                        " / ",
                        formatSeconds(duration)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                    lineNumber: 590,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
            lineNumber: 497,
            columnNumber: 7
        }, this);
    }
    _s1(VoiceBubble, "TkuolDt3lNh60qpDdqgKs2GVP9Y=");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        maxWidth: "md",
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "80vh",
            p: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    p: 2,
                    borderBottom: "1px solid #eee"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        children: "Chat"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 600,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body2",
                        color: "text.secondary",
                        children: receiver ? receiver.pseudo || receiver.firstName : "Select a user"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                lineNumber: 599,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    overflowY: "auto",
                    p: 2,
                    bgcolor: "#fafafa"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                        children: messages.map((m, idx)=>{
                            const isMe = String(m.senderId) === String(currentUserId);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__["ListItem"], {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: isMe ? "flex-end" : "flex-start"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        bgcolor: isMe ? "#d1ffd6" : "#fff",
                                        p: 1,
                                        borderRadius: 1,
                                        maxWidth: "80%"
                                    },
                                    children: [
                                        m.text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "body1",
                                            children: m.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                            lineNumber: 612,
                                            columnNumber: 29
                                        }, this) : null,
                                        Array.isArray(m.attachments) && m.attachments.map((a, i)=>{
                                            if (a.type === "image") {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        mt: 1
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: a.url,
                                                        alt: a.filename || "image",
                                                        style: {
                                                            maxWidth: "240px",
                                                            borderRadius: 6,
                                                            cursor: "pointer"
                                                        },
                                                        onClick: ()=>openPreview(a.url, a.filename)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                                        lineNumber: 618,
                                                        columnNumber: 27
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                                    lineNumber: 617,
                                                    columnNumber: 25
                                                }, this);
                                            }
                                            if (a.type === "audio") {
                                                // use the compact WhatsApp-like voice UI
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        mt: 1
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VoiceBubble, {
                                                        src: a.url,
                                                        filename: a.filename
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                                        lineNumber: 629,
                                                        columnNumber: 58
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                                    lineNumber: 629,
                                                    columnNumber: 30
                                                }, this);
                                            }
                                            // fallback: show link with download
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    mt: 1
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: a.url,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    onClick: (ev)=>{
                                                        ev.preventDefault();
                                                        downloadFile(a.url, a.filename);
                                                    },
                                                    children: a.filename || a.url
                                                }, void 0, false, {
                                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                                    lineNumber: 632,
                                                    columnNumber: 56
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                                lineNumber: 632,
                                                columnNumber: 28
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "caption",
                                            color: "text.secondary",
                                            sx: {
                                                display: "block",
                                                mt: 0.5
                                            },
                                            children: m.sentAt ? new Date(m.sentAt).toLocaleString() : ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                            lineNumber: 634,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                    lineNumber: 611,
                                    columnNumber: 17
                                }, this)
                            }, m._id || m.id || idx, false, {
                                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                lineNumber: 610,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            previewImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    position: "fixed",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                    p: 2
                },
                onClick: ()=>{
                    setPreviewImageUrl(null);
                    setPreviewFilename(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        bgcolor: "#fff",
                        borderRadius: 2,
                        p: 1,
                        maxWidth: "95%",
                        maxHeight: "95%"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: previewImageUrl,
                            alt: previewFilename || "preview",
                            style: {
                                maxWidth: "100%",
                                maxHeight: "80vh",
                                display: "block",
                                marginBottom: 8
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 661,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                gap: 1,
                                justifyContent: "flex-end"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "outlined",
                                    onClick: ()=>downloadFile(previewImageUrl, previewFilename || 'image'),
                                    children: "Download"
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "contained",
                                    onClick: ()=>{
                                        setPreviewImageUrl(null);
                                        setPreviewFilename(null);
                                    },
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                                    lineNumber: 664,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 662,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                    lineNumber: 660,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                lineNumber: 647,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    borderTop: "1px solid #eee",
                    p: 1,
                    display: "flex",
                    gap: 1,
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*,audio/*",
                        ref: fileInputRef,
                        style: {
                            display: "none"
                        },
                        onChange: onFileInputChange
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 672,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: ()=>fileInputRef.current && fileInputRef.current.click(),
                        title: "Attach photo or audio",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 674,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 673,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: ()=>{
                            recording ? stopRecording() : startRecording();
                        },
                        color: recording ? "error" : "default",
                        title: recording ? "Stop recording" : "Record voice",
                        children: recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 678,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 678,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            minWidth: 56
                        },
                        children: recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "caption",
                            color: "error",
                            children: formatElapsed(recordElapsedMs)
                        }, void 0, false, {
                            fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                            lineNumber: 683,
                            columnNumber: 24
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 682,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        placeholder: "Type a message...",
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        fullWidth: true,
                        size: "small",
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        onClick: handleSend,
                        disabled: sending,
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                        lineNumber: 695,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
                lineNumber: 671,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/uis/user-space/chat/[id]/ChatClient.js",
        lineNumber: 598,
        columnNumber: 5
    }, this);
}
_s(ChatClient, "NxXneEXDACM9+vNdDDndggnZVWI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ChatClient;
var _c;
__turbopack_context__.k.register(_c, "ChatClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_uis_user-space_chat_%5Bid%5D_ChatClient_88c8ce6e.js.map