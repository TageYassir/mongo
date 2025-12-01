'use client'

import { LocationOn as LocationOnIcon, MessageOutlined, PeopleOutline, CurrencyBitcoin, HomeOutlined, AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography, Paper, BottomNavigation, BottomNavigationAction, Badge, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export default function RootLayout({ children }) {
  const router = useRouter();

  // Notifications / invitations state (improved)
  const [anchorEl, setAnchorEl] = useState(null)
  const [invitations, setInvitations] = useState([])
  const [currentUserId, setCurrentUserId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [processingId, setProcessingId] = useState(null)

  const resolveCurrentUserId = async () => {
    try {
      const res = await fetch('/api/auth/me')
      if (res.ok) {
        const payload = await res.json().catch(() => null)
        const id = payload?.user?._id || payload?.user?.id || payload?.id || null
        if (id) return id
      }
    } catch (e) {}
    try {
      const res2 = await fetch('/api/users?operation=get-current')
      if (res2.ok) {
        const p2 = await res2.json().catch(() => null)
        const id2 = p2?.user?._id || p2?.user?.id || p2?.id || null
        if (id2) return id2
      }
    } catch (e) {}
    try {
      if (typeof window !== 'undefined') {
        const raw = localStorage.getItem('user')
        if (raw) {
          const parsed = JSON.parse(raw)
          const lid = parsed?.id || parsed?._id || null
          if (lid) return lid
        }
      }
    } catch (e) {}
    return null
  }

  const fetchInvitations = useCallback(async (uid) => {
    if (!uid) return setInvitations([])
    try {
      const invRes = await fetch(`/api/friends?operation=get-invitations&userId=${encodeURIComponent(uid)}`)
      if (!invRes.ok) {
        const body = await invRes.json().catch(() => null)
        console.warn('Failed to fetch invitations', body)
        setInvitations([])
        return
      }
      const payload = await invRes.json().catch(() => null)
      setInvitations(payload?.invitations || [])
    } catch (e) {
      console.warn('fetchInvitations error', e)
      setInvitations([])
    }
  }, [])

  useEffect(() => {
    let mounted = true
    const boot = async () => {
      setLoading(true)
      const me = await resolveCurrentUserId()
      if (!mounted) return
      setCurrentUserId(me)
      if (me) await fetchInvitations(me)
      setLoading(false)
    }
    boot()
    return () => { mounted = false }
  }, [fetchInvitations])

  // re-fetch when other parts of the app dispatch this event
  useEffect(() => {
    const handler = (e) => {
      try {
        if (currentUserId) fetchInvitations(currentUserId)
      } catch (err) {
        console.warn('friend-request-changed handler error', err)
      }
    }
    window.addEventListener('friend-request-changed', handler)
    return () => window.removeEventListener('friend-request-changed', handler)
  }, [currentUserId, fetchInvitations])

  const openMenu = (e) => setAnchorEl(e.currentTarget)
  const closeMenu = () => setAnchorEl(null)

  const respond = async (requestId, action) => {
    setProcessingId(requestId)
    try {
      const res = await fetch('/api/friends', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestId, action }),
      })
      const payload = await res.json().catch(() => null)
      if (!res.ok) throw new Error(payload?.error || 'Failed to update invitation')
      setInvitations((prev) => prev.filter(i => String(i._id) !== String(requestId)))
      try { window.dispatchEvent(new CustomEvent('friend-request-changed', { detail: { action, requestId } })) } catch (e) {}
    } catch (err) {
      alert(err.message || 'Failed to update invitation')
    } finally {
      setProcessingId(null)
    }
  }

  function loadScreen(event, screenURL) {
    event?.preventDefault?.();
    router.push(screenURL);
  }

  const [value, setValue] = useState(0);

  async function handleLogout() {
    // discover current user id (same fallback as earlier)
    let userId = null
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('user') : null
      if (raw) {
        const parsed = JSON.parse(raw)
        userId = parsed?.id ?? null
      }
    } catch (e) {
      userId = null
    }

    try {
      if (userId) {
        await fetch('/api/users?operation=logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: userId }),
        }).catch(() => {})
      } else {
        await fetch('/api/auth/logout', { method: 'POST' }).catch(() => {})
      }
    } catch (e) {
      // ignore
    }

    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
        localStorage.removeItem('userId')
        sessionStorage.setItem('justLoggedOut', '1')
      }
    } catch (e) {}

    if (typeof window !== 'undefined') {
      window.location.replace('/uis')
    }
  }

  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}>
      <Box sx={{ position: "relative", top: 0, left: 0, bottom: 0, right: 0, display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', overflow: 'hidden' }}>
        {/* App Bar (minimal) */}
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Typography sx={{ fontSize: 18, fontWeight: 700, flexGrow: 1 }}>
                Mini-Map
              </Typography>
              <Stack direction={"row"} spacing={1} alignItems="center">
                {/* Notifications */}
                <Box>
                  <IconButton onClick={openMenu} aria-label="notifications" size="large">
                    <Badge badgeContent={invitations.length} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>

                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
                    {loading && <MenuItem><Typography>Loading...</Typography></MenuItem>}
                    {!loading && invitations.length === 0 && <MenuItem><Typography>No invitations</Typography></MenuItem>}
                    {!loading && invitations.map((inv) => (
                      <MenuItem key={inv._id} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant="body2">{inv.senderId?.pseudo || `${inv.senderId?.firstName || ''} ${inv.senderId?.lastName || ''}`}</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button size="small" variant="contained" onClick={() => respond(inv._id, 'accept')} disabled={processingId === inv._id}>Accept</Button>
                          <Button size="small" variant="outlined" onClick={() => respond(inv._id, 'refuse')} disabled={processingId === inv._id}>Refuse</Button>
                        </Box>
                      </MenuItem>
                    ))}
                    <MenuItem>
                      <Button size="small" onClick={() => { closeMenu(); router.push('/uis/all-users') }}>Browse users</Button>
                    </MenuItem>
                  </Menu>
                </Box>

                <IconButton onClick={(e) => loadScreen(e, "/uis/user-space/profile")} size="large" edge="end" sx={{ ml: 1 }}>
                  {/* tiny profile button remains optional */}
                </IconButton>

                {/* Logout placed in User Space app bar */}
                <Button onClick={handleLogout} sx={{ color: 'error.main', textTransform: 'none', fontWeight: 600 }}>
                  Logout
                </Button>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Children */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: 1, '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
          {children}
        </Box>

        {/* Bottom Navigation - Maps, Chat, Crypto (currency) and Community */}
        <Box>
          <Paper elevation={2}>
            <BottomNavigation showLabels value={value} onChange={(event, newValue) => setValue(newValue)}>
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/user-space")} label="Home" icon={<HomeOutlined />} />
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/user-space/maps")} label="Maps" icon={<LocationOnIcon />} />
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/all-users")} label="Community" icon={<PeopleOutline />} />
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/chat")} label="Chat" icon={<MessageOutlined />} />
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/user-space/profile")} label="Profile" icon={<AccountCircle />} />
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/crypto")} label="Crypto" icon={<CurrencyBitcoin />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}