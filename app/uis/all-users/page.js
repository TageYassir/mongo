'use client'

import React, { useEffect, useState, useRef } from "react"
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Paper, CircularProgress, Container, Badge, TextField, IconButton, InputAdornment, Button, Stack } from "@mui/material"
import { colors } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
import Link from "next/link"
import { useRouter } from "next/navigation"

/**
 * All Users page — Contact now navigates to the user's profile in the user-space
 * Enhancement: Added a "Friends" section at the top so you can directly Message friends.
 *
 * Notes about currentUserId:
 * - We try to detect the current user id from localStorage (common key names used in simple apps: 'user' JSON or 'currentUserId').
 * - If no current user id is found we hide the Friends section and default to the original Contact behavior.
 */

export default function AllUsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState("")
  const debounceRef = useRef(null)
  const router = useRouter()

  // friends state
  const [friends, setFriends] = useState([])
  const [loadingFriends, setLoadingFriends] = useState(false)
  const [friendIds, setFriendIds] = useState(new Set())

  // Try to obtain current user id from localStorage (common patterns)
  const getCurrentUserId = () => {
    try {
      if (typeof window === 'undefined') return null
      // common: a full user object stored under 'user' or 'currentUser'
      const userRaw = window.localStorage.getItem('user') || window.localStorage.getItem('currentUser')
      if (userRaw) {
        try {
          const u = JSON.parse(userRaw)
          if (u && (u._id || u.id)) return u._id || u.id
        } catch (e) {
          // not JSON - maybe it's the id string
        }
      }
      // direct id keys
      const idDirect = window.localStorage.getItem('currentUserId') || window.localStorage.getItem('userId')
      if (idDirect) return idDirect
      return null
    } catch (e) {
      return null
    }
  }

  const currentUserId = getCurrentUserId()

  async function fetchUsers(q = "") {
    setLoading(true)
    setError(null)
    try {
      const url = `/api/users?operation=get-all-users${q ? `&q=${encodeURIComponent(q)}` : ""}`
      const res = await fetch(url, { headers: { "Content-Type": "application/json" } })
      const payload = await res.json()
      if (!res.ok) {
        setError(payload?.error || `Server returned ${res.status}`)
        setUsers([])
      } else {
        const list = Array.isArray(payload.users) ? payload.users : []
        setUsers(list)
      }
    } catch (err) {
      setError(err.message || "Failed to load users")
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  async function fetchFriendsForCurrentUser() {
    if (!currentUserId) {
      setFriends([])
      setFriendIds(new Set())
      return
    }
    setLoadingFriends(true)
    try {
      const url = `/api/friends?operation=get-friends&userId=${encodeURIComponent(currentUserId)}`
      const res = await fetch(url, { headers: { "Content-Type": "application/json" } })
      const payload = await res.json().catch(() => null)
      if (!res.ok) {
        console.warn('Failed to fetch friends:', payload?.error || res.status)
        setFriends([])
        setFriendIds(new Set())
      } else {
        const list = Array.isArray(payload.friends) ? payload.friends : []
        setFriends(list)
        const ids = new Set(list.map(u => u._id || u.id).filter(Boolean))
        setFriendIds(ids)
      }
    } catch (e) {
      console.warn('Failed to fetch friends', e)
      setFriends([])
      setFriendIds(new Set())
    } finally {
      setLoadingFriends(false)
    }
  }

  // initial load
  useEffect(() => {
    fetchUsers("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // fetch friends when component mounts (and when currentUserId changes)
  useEffect(() => {
    fetchFriendsForCurrentUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserId])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      fetchUsers(query.trim())
    }, 350)
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [query])

  const handleClear = () => setQuery("")
  const handleSubmit = (e) => { e.preventDefault(); if (debounceRef.current) clearTimeout(debounceRef.current); fetchUsers(query.trim()) }

  // Navigate to direct chat path (dynamic route)
  const navigateToChatWith = (id) => {
    if (!id) return
    router.push(`/uis/chat/${encodeURIComponent(id)}`)
  }

  // Navigate to the user's profile inside the user-space
  const navigateToUserProfile = (id) => {
    if (!id) return
    router.push(`/uis/user-space/profile/${encodeURIComponent(id)}`)
  }

  // Navigate specifically to the "friend" profile page (folder: [id]/friend/page.js)
  const navigateToFriendProfile = (id) => {
    if (!id) return
    router.push(`/uis/user-space/profile/${encodeURIComponent(id)}/friend`)
  }

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5">All Users</Typography>
        <Link href="/uis/user-space" passHref>
          <Button size="small" variant="contained">Back to User Space</Button>
        </Link>
      </Box>

      {/* Friends section: only visible when we can detect a current user */}
      {currentUserId && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>Friends</Typography>
          <Paper elevation={1} sx={{ p: 1, mb: 1 }}>
            {loadingFriends ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <CircularProgress size={20} />
              </Box>
            ) : friends.length === 0 ? (
              <Box sx={{ p: 1 }}>
                <Typography variant="body2">No friends to show.</Typography>
              </Box>
            ) : (
              <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', py: 1 }}>
                {friends.map((f) => {
                  const id = f._id || f.id || null
                  const displayName = f.pseudo || [f.firstName, f.lastName].filter(Boolean).join(" ") || "Unknown"
                  const initial = (displayName.charAt(0) || "?").toUpperCase()
                  const bg = (f.gender === "Male" ? colors.blue[800] : colors.red[600])
                  return (
                    <Paper key={id || Math.random()} sx={{ minWidth: 160, p: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ bgcolor: bg, width: 40, height: 40 }}>{initial}</Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{displayName}</Typography>
                        {/* Message + Visit Profil for friends */}
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={(e) => { e.stopPropagation(); navigateToChatWith(id) }}
                          >
                            Message
                          </Button>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={(e) => { e.stopPropagation(); navigateToFriendProfile(id) }}
                            aria-label={`Visit profile of ${displayName}`}
                          >
                            Visit Profil
                          </Button>
                        </Box>
                      </Box>
                    </Paper>
                  )
                })}
              </Stack>
            )}
          </Paper>
        </Box>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search by name or pseudo..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {query ? (
                  <IconButton size="small" onClick={() => setQuery("")}><ClearIcon /></IconButton>
                ) : (
                  <SearchIcon />
                )}
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Paper elevation={2} sx={{ height: "75vh", overflowY: "auto", p: 1 }}>
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Box sx={{ p: 2 }}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}

        {!loading && !error && users.length === 0 && (
          <Box sx={{ p: 2 }}>
            <Typography>No users found.</Typography>
          </Box>
        )}

        {!loading && !error && users.length > 0 && (
          <List>
            {users.map((u) => {
              const id = u._id || u.id || null
              // compute a display name without using email
              const displayName = u.pseudo || [u.firstName, u.lastName].filter(Boolean).join(" ") || "Unknown"
              const initial = (displayName.charAt(0) || "?").toUpperCase()
              const bg = (u.gender === "Male" ? colors.blue[800] : colors.red[600])
              // only show non-email info
              const subtitleParts = []
              if (u.country) subtitleParts.push(u.country)
              const subtitle = subtitleParts.join(" • ")

              const handleOpenConversation = () => navigateToChatWith(id)
              // Contact button now opens the user's profile in user-space (if not friend)
              const handleContactClick = (e) => { e.stopPropagation(); navigateToUserProfile(id) }

              const isFriend = id && friendIds.has(id)

              return (
                <Paper
                  key={id || `${u.pseudo || u.firstName || 'user'}-${Math.random()}`}
                  sx={{ mb: 1, cursor: id ? "pointer" : "default" }}
                  role="button"
                  tabIndex={id ? 0 : -1}
                  onClick={id ? handleOpenConversation : undefined}
                  onKeyDown={(e) => { if (e.key === "Enter" && id) handleOpenConversation() }}
                >
                  <ListItem
                    secondaryAction={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {/* If this user is a friend, show Message + Visit Profil; otherwise keep Contact */}
                        {isFriend ? (
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button
                              size="small"
                              variant="contained"
                              onClick={(e) => { e.stopPropagation(); navigateToChatWith(id) }}
                              disabled={!id}
                            >
                              Message
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={(e) => { e.stopPropagation(); navigateToFriendProfile(id) }}
                              disabled={!id}
                              aria-label={`Visit profile of ${displayName}`}
                            >
                              Visit Profil
                            </Button>
                          </Box>
                        ) : (
                          <Button size="small" variant="outlined" onClick={handleContactClick} disabled={!id}>
                            Contact
                          </Button>
                        )}
                      </Box>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: bg }}>{initial}</Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {displayName}
                          </Typography>
                        </Box>
                      }
                      secondary={subtitle}
                    />
                  </ListItem>
                </Paper>
              )
            })}
          </List>
        )}
      </Paper>
    </Container>
  )
}