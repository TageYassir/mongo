'use client'

import React, { useEffect, useState, useRef } from "react"
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Paper, CircularProgress, Container, Badge, TextField, IconButton, InputAdornment, Button, Stack } from "@mui/material"
import { colors } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
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
    <Container maxWidth="sm" sx={{ py: 3, px: { xs: 2, sm: 3 } }}>
      {/* Header: stacked on phones, centered title, user count */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1, mb: 2 }}>
        <Typography variant="h5" sx={{ textAlign: { xs: 'center', sm: 'left' }, width: '100%' }}>
          All Users
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'center', sm: 'flex-end' } }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13 }}>
            {users.length} {users.length === 1 ? 'user' : 'users'}
          </Typography>
        </Box>
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
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                sx={{ overflowX: { xs: 'visible', sm: 'auto' }, py: 1 }}
              >
                {friends.map((f) => {
                  const id = f._id || f.id || null
                  const displayName = f.pseudo || [f.firstName, f.lastName].filter(Boolean).join(" ") || "Unknown"
                  const initial = (displayName.charAt(0) || "?").toUpperCase()
                  const bg = (f.gender === "Male" ? colors.blue[800] : colors.red[600])
                  return (
                    <Paper
                      key={id || Math.random()}
                      sx={{
                        minWidth: { xs: '100%', sm: 160 },
                        p: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        borderRadius: 2
                      }}
                    >
                      <Avatar sx={{ bgcolor: bg, width: { xs: 36, sm: 40 }, height: { xs: 36, sm: 40 } }}>{initial}</Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{displayName}</Typography>
                        {/* Message + Visit Profil for friends */}
                        <Box sx={{ display: 'flex', gap: 1, mt: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={(e) => { e.stopPropagation(); navigateToChatWith(id) }}
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                          >
                            Message
                          </Button>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={(e) => { e.stopPropagation(); navigateToFriendProfile(id) }}
                            aria-label={`Visit profile of ${displayName}`}
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
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
          inputProps={{ 'aria-label': 'Search users' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {query ? (
                  <IconButton size="small" onClick={() => setQuery("")} aria-label="Clear search"><ClearIcon /></IconButton>
                ) : (
                  <SearchIcon aria-hidden="true" />
                )}
              </InputAdornment>
            )
          }}
          sx={{ '& .MuiInputBase-input': { padding: { xs: '10px 12px', sm: undefined } } }}
        />
      </Box>

      {/* Main content: no fixed height, no internal scroll — page will flow naturally */}
      <Paper elevation={2} sx={{ p: 1 }}>
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
          // stacked cards (mobile-first): each card grows the page instead of creating an inner scrollbar
          <Stack spacing={2} sx={{ mt: 1 }}>
            {users.map((u) => {
              const id = u._id || u.id || null
              const displayName = u.pseudo || [u.firstName, u.lastName].filter(Boolean).join(" ") || "Unknown"
              const initial = (displayName.charAt(0) || "?").toUpperCase()
              const bg = (u.gender === "Male" ? colors.blue[800] : colors.red[600])
              const subtitleParts = []
              if (u.country) subtitleParts.push(u.country)
              const subtitle = subtitleParts.join(" • ")

              const handleOpenConversation = () => navigateToChatWith(id)
              const handleContactClick = (e) => { e.stopPropagation(); navigateToUserProfile(id) }
              const isFriend = id && friendIds.has(id)

              return (
                <Paper
                  key={id || `${u.pseudo || u.firstName || 'user'}-${Math.random()}`}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' }
                  }}
                  role={id ? "button" : undefined}
                  tabIndex={id ? 0 : -1}
                  onClick={id ? handleOpenConversation : undefined}
                  onKeyDown={(e) => { if (e.key === "Enter" && id) handleOpenConversation() }}
                >
                  <Avatar sx={{ bgcolor: bg, width: { xs: 56, sm: 48 }, height: { xs: 56, sm: 48 } }}>{initial}</Avatar>

                  <Box sx={{ flex: 1, width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
                      <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, width: '100%' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {displayName}
                        </Typography>
                        {subtitle && <Typography variant="body2" color="text.secondary">{subtitle}</Typography>}
                      </Box>

                      {/* On small screens make actions full-width stacked; on larger screens keep them inline */}
                      <Box sx={{ display: 'flex', gap: 1, mt: { xs: 1, sm: 0 }, width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'center', sm: 'flex-end' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                        {isFriend ? (
                          <>
                            <Button
                              variant="contained"
                              onClick={(e) => { e.stopPropagation(); navigateToChatWith(id) }}
                              disabled={!id}
                              sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                              Message
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={(e) => { e.stopPropagation(); navigateToFriendProfile(id) }}
                              disabled={!id}
                              aria-label={`Visit profile of ${displayName}`}
                              sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                              Visit Profil
                            </Button>
                          </>
                        ) : (
                          <Button
                            variant="outlined"
                            onClick={(e) => { e.stopPropagation(); handleContactClick(e) }}
                            disabled={!id}
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                          >
                            Contact
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              )
            })}
          </Stack>
        )}
      </Paper>
    </Container>
  )
}