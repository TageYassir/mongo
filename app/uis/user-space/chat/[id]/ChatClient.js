'use client'

import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { useSearchParams, useParams } from "next/navigation"
import { Box, Typography, Container, TextField, Button, List, ListItem, IconButton } from "@mui/material"
import ImageIcon from "@mui/icons-material/Image"
import MicIcon from "@mui/icons-material/Mic"
import StopIcon from "@mui/icons-material/Stop"

/**
 * ChatClient with:
 * - composer fixed at bottom
 * - image upload
 * - voice recording (MediaRecorder)
 * - messages render attachments (image/audio)
 *
 * Note: requires server upload endpoint at /api/messages/upload (multipart/form-data).
 */

export default function ChatClient({ receiver: receiverFromServer = null, receiverId: receiverProp = null }) {
  const searchParams = useSearchParams()
  const receiverFromQuery = searchParams ? searchParams.get("receiver") : null
  const params = useParams ? useParams() : {}
  const routeId = params?.id ?? null
  const receiverId = receiverFromServer ? (receiverFromServer._id || receiverFromServer.id || null) : (receiverProp || receiverFromQuery || routeId || null)

  const [currentUserId, setCurrentUserId] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [receiver, setReceiver] = useState(receiverFromServer || null)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [loadingMessages, setLoadingMessages] = useState(false)

  // recording state
  const [recording, setRecording] = useState(false)
  const mediaRecorderRef = useRef(null)
  const recordedChunksRef = useRef([])

  const messagesEndRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    async function loadCurrentUser() {
      try {
        const res = await fetch("/api/users?operation=get-current")
        if (res.ok) {
          const payload = await res.json()
          const uid = payload?.user?._id || payload?.user?.id || payload?.current?.id || payload?.id || null
          if (uid) {
            setCurrentUserId(uid)
            try {
              const r2 = await fetch(`/api/users/${encodeURIComponent(uid)}`)
              if (r2.ok) {
                const p2 = await r2.json()
                const usr = p2?.user ?? p2
                setCurrentUser(usr || null)
                return
              }
            } catch (e) { /* ignore */ }
            setCurrentUser(payload?.user || null)
            return
          }
        }
      } catch (e) {
        // fallback to localStorage
      }
      try {
        const raw = typeof window !== 'undefined' ? localStorage.getItem('user') : null
        if (raw) {
          const parsed = JSON.parse(raw)
          if (parsed?.id) {
            setCurrentUserId(parsed.id)
            setCurrentUser(parsed)
          }
        }
      } catch (e) {}
    }
    loadCurrentUser()
  }, [])

  useEffect(() => {
    async function fetchConversation() {
      if (!receiverId) return
      let userA = currentUserId
      if (!userA) {
        try {
          const raw = typeof window !== 'undefined' ? localStorage.getItem("user") : null
          if (raw) {
            const parsed = JSON.parse(raw)
            if (parsed?.id) userA = parsed.id
          }
        } catch (e) {}
      }
      if (!userA) return

      setLoadingMessages(true)
      setError(null)
      try {
        const url = `/api/messages?operation=get-conversation&userA=${encodeURIComponent(userA)}&userB=${encodeURIComponent(receiverId)}`
        const res = await fetch(url)
        if (!res.ok) {
          const payload = await res.json().catch(() => null)
          setError(payload?.error || `Server returned ${res.status}`)
          setMessages([])
        } else {
          const payload = await res.json()
          const msgs = Array.isArray(payload?.messages) ? payload.messages : []
          setMessages(msgs)
          setTimeout(() => scrollToBottom(), 50)
        }
      } catch (err) {
        setError(err.message || "Failed to load conversation")
      } finally {
        setLoadingMessages(false)
      }
    }
    fetchConversation()
    // refetch when receiver or user changes
  }, [currentUserId, receiverId])

  const scrollToBottom = () => {
    try {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
      }
    } catch (e) {}
  }

  // upload helper: sends file via FormData to /api/messages/upload and returns { url, filename, size, type }
  async function uploadFile(file) {
    try {
      const fd = new FormData()
      fd.append("file", file)
      const res = await fetch("/api/messages/upload", { method: "POST", body: fd })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error || `Upload failed (${res.status})`)
      }
      const payload = await res.json()
      return payload?.file || null
    } catch (err) {
      console.error("uploadFile", err)
      throw err
    }
  }

  async function handleSend() {
    if ((!text || text.trim() === "") && messages.length && !sending) {
      // do nothing if empty message
    }
    if (!receiverId) { setError("No receiver selected."); return }
    setSending(true)
    setError(null)

    const sentAt = new Date().toISOString()
    let senderIdFinal = currentUserId
    if (!senderIdFinal) {
      try {
        const raw = typeof window !== 'undefined' ? localStorage.getItem("user") : null
        if (raw) {
          const parsed = JSON.parse(raw)
          senderIdFinal = parsed?.id || null
        }
      } catch (e) {}
    }
    if (!senderIdFinal) {
      setError("Unable to determine current user id. Please login again.")
      setSending(false)
      return
    }

    const messagePayload = {
      senderId: senderIdFinal,
      receiverId,
      text: text.trim() || "",
      sentAt,
      attachments: [], // attachments added by other flows
    }

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messagePayload),
      })
      if (res.ok) {
        const payload = await res.json()
        const saved = payload?.message || messagePayload
        setMessages((m) => [...m, saved])
        setText("")
        setTimeout(() => scrollToBottom(), 50)
        // Optionally refetch conversation to ensure persisted ordering
      } else {
        const payload = await res.json().catch(() => null)
        setError(payload?.error || `Server returned ${res.status}`)
      }
    } catch (err) {
      console.error("send message error", err)
      setError("Failed to send message")
    } finally {
      setSending(false)
    }
  }

  // handle image file selection
  async function handleImageSelected(file) {
    if (!file) return
    try {
      const uploaded = await uploadFile(file)
      if (!uploaded?.url) throw new Error("Upload did not return url")
      // now send a message with attachment
      const senderIdFinal = currentUserId || (JSON.parse(localStorage.getItem("user") || "{}").id)
      const payload = {
        senderId: senderIdFinal,
        receiverId,
        text: "", // optional caption could be included
        sentAt: new Date().toISOString(),
        attachments: [{ type: "image", url: uploaded.url, filename: uploaded.filename, size: uploaded.size }],
      }
      const r = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (r.ok) {
        const p = await r.json()
        setMessages((m) => [...m, p?.message || payload])
        setTimeout(() => scrollToBottom(), 50)
      } else {
        const p = await r.json().catch(() => null)
        setError(p?.error || `Server returned ${r.status}`)
      }
    } catch (err) {
      console.error("image send error", err)
      setError(err.message || "Image upload failed")
    }
  }

  // Recording voice message
  async function startRecording() {
    setError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      recordedChunksRef.current = []
      mediaRecorder.addEventListener("dataavailable", (ev) => {
        if (ev.data && ev.data.size > 0) recordedChunksRef.current.push(ev.data)
      })
      mediaRecorder.addEventListener("stop", async () => {
        try {
          const blob = new Blob(recordedChunksRef.current, { type: "audio/webm" })
          const file = new File([blob], `voice-${Date.now()}.webm`, { type: blob.type })
          await handleImageSelected(file) // reuse upload/send logic (name is generic)
        } catch (err) {
          console.error("record stop error", err)
        } finally {
          setRecording(false)
          try { stream.getTracks().forEach(t => t.stop()) } catch (e) {}
        }
      })
      mediaRecorderRef.current = mediaRecorder
      mediaRecorder.start()
      setRecording(true)
    } catch (err) {
      console.error("startRecording error", err)
      setError("Could not start audio recording (permission denied or unsupported).")
      setRecording(false)
    }
  }

  function stopRecording() {
    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop()
      }
    } catch (e) {}
  }

  // file input change handler
  function onFileInputChange(e) {
    const f = e.target.files && e.target.files[0]
    if (f) handleImageSelected(f)
    e.target.value = null
  }

  return (
    <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", height: "80vh", p: 0 }}>
      <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
        <Typography variant="h6">Chat</Typography>
        <Typography variant="body2" color="text.secondary">{receiver ? (receiver.pseudo || receiver.firstName) : "Select a user"}</Typography>
      </Box>

      {/* Messages area - grows and scrolls */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 2, bgcolor: "#fafafa" }}>
        <List>
          {messages.map((m, idx) => {
            const isMe = String(m.senderId) === String(currentUserId)
            return (
              <ListItem key={m._id || m.id || idx} sx={{ display: "flex", flexDirection: "column", alignItems: isMe ? "flex-end" : "flex-start" }}>
                <Box sx={{ bgcolor: isMe ? "#d1ffd6" : "#fff", p: 1, borderRadius: 1, maxWidth: "80%" }}>
                  {m.text ? <Typography variant="body1">{m.text}</Typography> : null}
                  {/* render attachments */}
                  {Array.isArray(m.attachments) && m.attachments.map((a, i) => {
                    if (a.type === "image") {
                      return <Box key={i} sx={{ mt: 1 }}><img src={a.url} alt={a.filename || "image"} style={{ maxWidth: "240px", borderRadius: 6 }} /></Box>
                    }
                    if (a.type === "audio") {
                      return <Box key={i} sx={{ mt: 1 }}><audio controls src={a.url} /></Box>
                    }
                    // fallback: show link
                    return <Box key={i} sx={{ mt: 1 }}><a href={a.url} target="_blank" rel="noreferrer">{a.filename || a.url}</a></Box>
                  })}
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.5 }}>
                    {m.sentAt ? new Date(m.sentAt).toLocaleString() : ""}
                  </Typography>
                </Box>
              </ListItem>
            )
          })}
        </List>
        <div ref={messagesEndRef} />
      </Box>

      {/* Composer fixed to bottom */}
      <Box sx={{ borderTop: "1px solid #eee", p: 1, display: "flex", gap: 1, alignItems: "center" }}>
        <input type="file" accept="image/*,audio/*" ref={fileInputRef} style={{ display: "none" }} onChange={onFileInputChange} />
        <IconButton onClick={() => fileInputRef.current && fileInputRef.current.click()} title="Attach photo or audio">
          <ImageIcon />
        </IconButton>

        <IconButton onClick={() => { recording ? stopRecording() : startRecording() }} color={recording ? "error" : "default"} title={recording ? "Stop recording" : "Record voice"}>
          {recording ? <StopIcon /> : <MicIcon />}
        </IconButton>

        <TextField
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          size="small"
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend() } }}
        />

        <Button variant="contained" onClick={handleSend} disabled={sending}>
          Send
        </Button>
      </Box>
    </Container>
  )
}