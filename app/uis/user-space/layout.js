'use client'

import { MessageOutlined, PeopleOutline, CurrencyBitcoinOutlined, HomeOutlined, AccountCircleOutlined, NotificationsOutlined as NotificationsIcon } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography, Paper, BottomNavigation, BottomNavigationAction, Badge } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export default function RootLayout({ children }) {
  const router = useRouter();

  // Notifications / invitations state (improved)
  const [invitations, setInvitations] = useState([])
  const [currentUserId, setCurrentUserId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [processingId, setProcessingId] = useState(null)
  const [value, setValue] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0)

  // ---------------------------------------------------------------------------
  // Helpers: resolve current user id from server/local state
  // ---------------------------------------------------------------------------
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
        const uid = localStorage.getItem('userId')
        if (uid) return uid
      }
    } catch (e) {}
    return null
  }

  // ---------------------------------------------------------------------------
  // Invitations
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // Unread messages count (received by current user and isSeen !== true)
  // ---------------------------------------------------------------------------
  const fetchUnreadCount = useCallback(async (uid) => {
    if (!uid) {
      setUnreadCount(0)
      return
    }
    try {
      const res = await fetch(`/api/messages?operation=get-by-user&userId=${encodeURIComponent(uid)}`)
      if (!res.ok) {
        setUnreadCount(0)
        return
      }
      const payload = await res.json().catch(() => null)
      const msgs = Array.isArray(payload?.messages) ? payload.messages : []
      let count = 0
      msgs.forEach(m => {
        // determine receiver id (handle populated or plain)
        const rec = m.receiverId || (m.receiver && (m.receiver._id || m.receiver.id)) || null
        const recId = rec && typeof rec === 'object' ? (rec._id || rec.id) : rec
        if (String(recId) !== String(uid)) return
        if (m.isSeen === true) return
        count += 1
      })
      setUnreadCount(count)
    } catch (e) {
      console.warn('fetchUnreadCount error', e)
      setUnreadCount(0)
    }
  }, [])

  useEffect(() => {
    let mounted = true
    const boot = async () => {
      setLoading(true)
      const me = await resolveCurrentUserId()
      if (!mounted) return
      setCurrentUserId(me)
      if (me) {
        await fetchInvitations(me)
        await fetchUnreadCount(me)
      }
      setLoading(false)
    }
    boot()
    return () => { mounted = false }
  }, [fetchInvitations, fetchUnreadCount])

  // re-fetch when other parts of the app dispatch this event
  useEffect(() => {
    const handler = (e) => {
      try {
        if (currentUserId) {
          fetchInvitations(currentUserId)
          fetchUnreadCount(currentUserId)
        }
      } catch (err) {
        console.warn('friend-request-changed handler error', err)
      }
    }
    window.addEventListener('friend-request-changed', handler)
    return () => window.removeEventListener('friend-request-changed', handler)
  }, [currentUserId, fetchInvitations, fetchUnreadCount])

  // navigation helper
  function loadScreen(event, screenURL) {
    event?.preventDefault?.();
    router.push(screenURL);
  }

  // ---------------------------------------------------------------------------
  // Wallet disconnect helper (attempts to disconnect common providers + clear cache)
  // ---------------------------------------------------------------------------
  const signOutWallet = async () => {
    try {
      if (typeof window === 'undefined') return;
      const eth = window.ethereum;
      try { if (eth && typeof eth.disconnect === 'function') await eth.disconnect().catch(() => {}); } catch (e) {}
      try { if (eth && typeof eth.close === 'function') await eth.close().catch(() => {}); } catch (e) {}
      try { if (eth?.connector?.disconnect) await eth.connector.disconnect().catch(() => {}); } catch (e) {}
      try { if (eth?.connector?.close) await eth.connector.close().catch(() => {}); } catch (e) {}
      try { if (eth?.wc?.disconnect) await eth.wc.disconnect().catch(() => {}); } catch (e) {}
    } catch (e) {
      // ignore provider disconnect errors
    }

    // remove common cached keys used by WalletConnect / connectors / libs
    try {
      const cachedKeys = [
        'walletconnect',
        'WALLETCONNECT_DEEPLINK_CHOICE',
        'WALLET_CONNECT_CACHED_PROVIDER',
        'connectedWallet',
        'connectorId',
        'wagmi.wallet',
        'web3auth',
        'connectedWalletAddress'
      ];
      cachedKeys.forEach(k => { try { localStorage.removeItem(k); } catch (e) {} });
    } catch (e) {}
    try { window.dispatchEvent(new CustomEvent('wallet-disconnected')); } catch (e) {}
  }

  // ---------------------------------------------------------------------------
  // local cleanup: remove wallet and tx keys from localStorage (all or for specific user)
  // ---------------------------------------------------------------------------
  function clearWalletLocalKeysForUser(optionalUserId) {
    try {
      if (typeof window === 'undefined') return;
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (!key) continue;
        if (optionalUserId) {
          if (key.startsWith(`wallet:${optionalUserId}:`) || key.startsWith(`tx:${optionalUserId}`) || key.startsWith(`tx:`)) {
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

  // ---------------------------------------------------------------------------
  // Logout handler — improved to clear client-side wallet artifacts and broadcast logout
  // ---------------------------------------------------------------------------
  async function handleLogout() {
    // discover current user id (same fallback as earlier)
    let userId = null
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('user') : null
      if (raw) {
        const parsed = JSON.parse(raw)
        userId = parsed?.id ?? parsed?._id ?? null
      }
      if (!userId) {
        const uid = typeof window !== 'undefined' ? localStorage.getItem('userId') : null
        if (uid) userId = uid
      }
    } catch (e) {
      userId = null
    }

    // attempt server logout (best-effort)
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

    // disconnect wallet providers and clear related cached keys
    try {
      await signOutWallet()
    } catch (e) {}

    // Clear local app state and wallet artifacts
    try {
      localStorage.removeItem('user')
    } catch (e) {}
    try {
      localStorage.removeItem('userId')
    } catch (e) {}
    try {
      sessionStorage.setItem('justLoggedOut', '1')
    } catch (e) {}

    // Clear wallet and tx keys (prefer per-user, if available)
    try {
      if (userId) clearWalletLocalKeysForUser(userId)
      else clearWalletLocalKeysForUser()
    } catch (e) {}

    // Broadcast logout so other tabs / components can react
    try {
      localStorage.setItem('user-logout-ts', String(Date.now()));
      // also dispatch a custom event for in-tab listeners
      try { window.dispatchEvent(new CustomEvent('user-logout', { detail: { userId } })) } catch (e) {}
    } catch (e) {}

    // Redirect to public area
    try {
      window.location.replace('/uis')
    } catch (e) {
      try { router.replace('/uis') } catch (er) {}
    }
  }

  // Expose sign-out helper and listen for external logout broadcasts
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try { window.appSignOut = handleLogout } catch (e) {}

    function onStorage(e) {
      try {
        if (!e) return;
        // When another tab signals logout, clear local wallet and user keys locally
        if (e.key === 'user-logout-ts') {
          try { localStorage.removeItem('user'); } catch (er) {}
          try { localStorage.removeItem('userId'); } catch (er) {}
          clearWalletLocalKeysForUser();
          setCurrentUserId(null);
        }

        // If userId was removed in another tab, clear wallet keys
        if (e.key === 'userId') {
          const oldVal = e.oldValue;
          const newVal = e.newValue;
          if (!newVal) {
            // user cleared -> remove all wallet keys and reset currentUserId
            clearWalletLocalKeysForUser();
            setCurrentUserId(null);
          } else if (oldVal && oldVal !== newVal) {
            // user switched accounts in another tab: remove previous user's wallet keys and update currentUserId
            try { clearWalletLocalKeysForUser(oldVal); } catch (er) {}
            setCurrentUserId(newVal);
            fetchInvitations(newVal);
            fetchUnreadCount(newVal);
          } else if (!oldVal && newVal) {
            // fresh login in another tab
            setCurrentUserId(newVal);
            fetchInvitations(newVal);
            fetchUnreadCount(newVal);
          }
        }

        // If full user object changed (e.g. login), attempt to read and update currentUserId
        if (e.key === 'user') {
          try {
            const parsed = e.newValue ? JSON.parse(e.newValue) : null;
            const newId = parsed?.id || parsed?._id || null;
            if (newId) {
              setCurrentUserId(newId);
              fetchInvitations(newId);
              fetchUnreadCount(newId);
            }
            if (!e.newValue) {
              // removed user
              setCurrentUserId(null);
            }
          } catch (err) {}
        }
      } catch (err) {
        // ignore
      }
    }

    window.addEventListener('storage', onStorage)
    return () => {
      try { delete window.appSignOut } catch (e) {}
      window.removeEventListener('storage', onStorage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchInvitations, fetchUnreadCount])

  // ---------------------------------------------------------------------------
  // UI
  // ---------------------------------------------------------------------------
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
                  <IconButton
                    aria-label="notifications"
                    size="large"
                    onClick={() => router.push('/uis/user-space/notif')}
                  >
                    <Badge badgeContent={(invitations?.length || 0) + (unreadCount || 0)} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
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
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/user-space/all-users")} label="Community" icon={<PeopleOutline />} />
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/user-space/chat")} label="Chat" icon={<MessageOutlined />} />
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/user-space/profile")} label="Profile" icon={<AccountCircleOutlined />} />
              <BottomNavigationAction onClick={(e) => loadScreen(e, "/uis/user-space/crypto-ethers")} label="Crypto" icon={<CurrencyBitcoinOutlined />} />
            </BottomNavigation>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}