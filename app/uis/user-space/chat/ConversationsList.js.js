'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Box, 
  CircularProgress, 
  List, 
  Typography, 
  Avatar, 
  Paper, 
  TextField, 
  InputAdornment, 
  IconButton,
  Badge,
  Container
} from '@mui/material'
import {
  Search as SearchIcon,
  Clear as ClearIcon,
  ChatBubbleOutline as ChatIcon,
  AccessTime as TimeIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material'

/**
 * Modernized ConversationsList with unread-count logic added.
 * NOTE: Design and online logic are unchanged.
 */

// Helper to format time smartly
const formatTime = (dateStr) => {
  if (!dateStr) return ""
  const date = new Date(dateStr)
  const now = new Date()
  const isToday = date.toDateString() === now.toDateString()
  
  if (isToday) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' })
}

export default function ConversationsList() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [currentUserId, setCurrentUserId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [conversations, setConversations] = useState([]) 
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadCurrentUser() {
      try {
        const res = await fetch("/api/users?operation=get-current")
        if (res.ok) {
          const payload = await res.json()
          const uid = payload?.user?._id || payload?.user?.id || payload?.current?.id || payload?.id || null
          if (uid) { setCurrentUserId(uid); return }
        }
      } catch (e) { /* ignore */ }

      try {
        const raw = typeof window !== "undefined" ? localStorage.getItem("user") : null
        if (raw) {
          const parsed = JSON.parse(raw)
          if (parsed?.id || parsed?._id) { setCurrentUserId(parsed.id || parsed._id); return }
        }
      } catch (e) { /* ignore */ }
    }
    loadCurrentUser()
  }, [])

  useEffect(() => {
    async function loadConversations() {
      if (!currentUserId) {
        if (!loading) setLoading(false)
        return
      }

      setLoading(true)
      setError(null)
      try {
        const url = `/api/messages?operation=get-by-user&userId=${encodeURIComponent(currentUserId)}`
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Error ${res.status}`)

        const payload = await res.json()
        const msgs = Array.isArray(payload?.messages) ? payload.messages : []

        // Build a map of peerId -> conversation info, including unreadCount
        const map = new Map()
        msgs.forEach((m) => {
          // normalize sender/receiver ids (handle populated objects)
          const senderIdRaw = m.senderId && typeof m.senderId === 'object' ? (m.senderId._id || m.senderId.id) : m.senderId
          const receiverIdRaw = m.receiverId && typeof m.receiverId === 'object' ? (m.receiverId._id || m.receiverId.id) : m.receiverId
          const senderStr = senderIdRaw ? String(senderIdRaw) : null
          const receiverStr = receiverIdRaw ? String(receiverIdRaw) : null

          const otherId = (String(senderStr) === String(currentUserId)) ? String(receiverStr) : String(senderStr)
          if (!otherId || otherId === 'null' || otherId === 'undefined') return
          const existing = map.get(otherId)
          const msgTime = m.sentAt ? new Date(m.sentAt).getTime() : 0

          // unread if message was received by the current user and isSeen !== true
          const isReceived = String(receiverStr) === String(currentUserId)
          const isSeen = m.isSeen === true
          const unreadIncrement = (isReceived && !isSeen) ? 1 : 0

          if (!existing || msgTime > existing.lastAt) {
            map.set(otherId, {
              peerId: otherId,
              lastText: m.text || "",
              lastAt: msgTime,
              lastSentAtRaw: m.sentAt || null,
              unread: (existing ? (existing.unread || 0) : 0) + unreadIncrement
            })
          } else {
            // just accumulate unread count if not the newest
            existing.unread = (existing.unread || 0) + unreadIncrement
            map.set(otherId, existing)
          }
        })

        const peers = Array.from(map.values()).sort((a, b) => b.lastAt - a.lastAt)

        const details = await Promise.all(peers.map(async (p) => {
          try {
            const r = await fetch(`/api/users/${encodeURIComponent(p.peerId)}`)
            if (r.ok) {
              const pl = await r.json()
              return { ...p, peer: pl?.user ?? pl }
            }
            const r2 = await fetch(`/api/users?operation=get-user&id=${encodeURIComponent(p.peerId)}`)
            if (r2.ok) {
              const pl2 = await r2.json()
              return { ...p, peer: pl2?.user || pl2 }
            }
            return { ...p, peer: null }
          } catch (e) {
            return { ...p, peer: null }
          }
        }))

        setConversations(details)
      } catch (err) {
        setError(err.message || "Failed to load")
      } finally {
        setLoading(false)
      }
    }

    loadConversations()
  }, [currentUserId])

  const openConversation = async (peerId) => {
    if (!peerId) return

    // Use the same robust logic as ChatClient:
    // - fetch the conversation
    // - compute idsToMark (received by currentUser && isSeen !== true)
    // - call mark-seen API
    // - update local conversations state immediately so UI doesn't show unread
    try {
      if (currentUserId) {
        const convRes = await fetch(`/api/messages?operation=get-conversation&userA=${encodeURIComponent(currentUserId)}&userB=${encodeURIComponent(peerId)}`)
        if (convRes.ok) {
          const convPayload = await convRes.json().catch(() => null)
          const convMsgs = Array.isArray(convPayload?.messages) ? convPayload.messages : []
          const idsToMark = convMsgs
            .filter(m => {
              const receiverIdRaw = m.receiverId && typeof m.receiverId === 'object' ? (m.receiverId._id || m.receiverId.id) : m.receiverId
              const receiverStr = receiverIdRaw ? String(receiverIdRaw) : null
              const isReceived = String(receiverStr) === String(currentUserId)
              const isSeen = m.isSeen === true
              return isReceived && !isSeen
            })
            .map(m => m._id || m.id)
            .filter(Boolean)

          if (idsToMark.length) {
            // best-effort: mark seen on server
            await fetch('/api/messages/mark-seen', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ messageIds: idsToMark, userId: currentUserId })
            }).catch(() => {})

            // update local conversation unread count for immediate UI feedback
            setConversations(prev => prev.map(c => {
              if (!c || !c.peerId) return c
              if (String(c.peerId) === String(peerId)) {
                return { ...c, unread: 0 }
              }
              return c
            }))

            // also update any in-memory caches if you expect them elsewhere (dispatch event)
            try { window.dispatchEvent(new CustomEvent('friend-request-changed')) } catch (e) {}
          }
        }
      }
    } catch (err) {
      console.warn('mark-seen pre-navigation failed', err)
    } finally {
      router.push(`/uis/user-space/chat/${encodeURIComponent(peerId)}`)
    }
  }

  const filteredConversations = conversations.filter((c) => {
    if (!query.trim()) return true
    const name = c.peer ? (c.peer.pseudo || c.peer.firstName || '') : ''
    return name.toLowerCase().includes(query.trim().toLowerCase())
  })

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f0f2f5', pb: 4 }}>
      <Container maxWidth="sm" sx={{ py: { xs: 2, sm: 4 } }}>
        
        {/* Header */}
        <Box sx={{ mb: 3, px: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#1c1e21', letterSpacing: '-0.5px' }}>
            Chats
          </Typography>
        </Box>

        {/* Search */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search people..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                bgcolor: 'white',
                '& fieldset': { border: 'none' },
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary', ml: 1 }} />
                </InputAdornment>
              ),
              endAdornment: query && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setQuery("")}><ClearIcon /></IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>

        {/* List Content */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress size={30} thickness={5} />
          </Box>
        ) : error ? (
          <Paper sx={{ p: 2, bgcolor: '#fff0f0', borderRadius: 3, textAlign: 'center' }}>
            <Typography color="error">{error}</Typography>
          </Paper>
        ) : conversations.length === 0 ? (
          <Paper elevation={0} sx={{ p: 6, textAlign: 'center', borderRadius: 4, bgcolor: 'transparent', border: '2px dashed #ccc' }}>
            <ChatIcon sx={{ fontSize: 48, color: '#ccc', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">No messages yet</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Start a conversation from the directory.
            </Typography>
          </Paper>
        ) : (
          <List sx={{ p: 0 }}>
            {filteredConversations.map((c) => {
              const peer = c.peer
              const displayName = peer ? (peer.pseudo || peer.firstName || "User") : "User"
              const initial = displayName.charAt(0).toUpperCase()
              const isMale = peer?.gender === 'Male'
              const isOnline = peer?.isOnline ?? false
              const unread = c.unread || 0

              return (
                <Paper
                  key={c.peerId}
                  elevation={0}
                  onClick={() => openConversation(c.peerId)}
                  sx={{
                    mb: 1.5,
                    borderRadius: 4,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    borderLeft: '4px solid transparent',
                    '&:hover': {
                      bgcolor: '#fff',
                      transform: 'translateX(4px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      borderLeft: '4px solid #1976d2'
                    }
                  }}
                >
                  <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                    {/* Outer numeric badge for unread, inner dot badge for online */}
                    <Badge
                      color="error"
                      badgeContent={unread > 0 ? unread : null}
                      overlap="circular"
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        sx={{ 
                          '& .MuiBadge-badge': { 
                            bgcolor: isOnline ? '#44b700' : '#bdbdbd', 
                            border: '2px solid white',
                            boxShadow: `0 0 0 1px ${isOnline ? '#44b700' : '#bdbdbd'}`
                          } 
                        }}
                      >
                        <Avatar 
                          sx={{ 
                            width: 54, 
                            height: 54, 
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            background: isMale 
                              ? 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)' 
                              : 'linear-gradient(135deg, #d32f2f 0%, #ff8a80 100%)',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                          }}
                        >
                          {initial}
                        </Avatar>
                      </Badge>
                    </Badge>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1c1e21', noWrap: true }}>
                          {displayName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                          {formatTime(c.lastSentAtRaw)}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: unread > 0 ? 'text.primary' : 'text.secondary', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap',
                            fontWeight: unread > 0 ? 700 : 400,
                            maxWidth: '90%'
                          }}
                        >
                          {c.lastText || "No message content"}
                        </Typography>
                        <ChevronRightIcon sx={{ color: '#ccc', fontSize: 18 }} />
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              )
            })}
          </List>
        )}
      </Container>
    </Box>
  )
}