"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { 
  Box, Container, Typography, Paper, List, ListItem, ListItemAvatar, 
  Avatar, ListItemText, Button, Divider, Stack, CircularProgress, 
  GlobalStyles, colors, Chip, IconButton
} from "@mui/material";
import { 
  Email as MailIcon, PersonAdd as PersonAddIcon, 
  ChatBubbleOutline, ArrowForwardIos 
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

// ... (getCurrentUserId and extractId helpers remain the same as your snippet)
const getCurrentUserId = () => {
  try {
    if (typeof window === 'undefined') return null;
    const userRaw = window.localStorage.getItem('user') || window.localStorage.getItem('currentUser');
    if (userRaw) {
      try {
        const u = JSON.parse(userRaw);
        if (u && (u._id || u.id)) return u._id || u.id;
      } catch (e) { }
    }
    return window.localStorage.getItem('currentUserId') || window.localStorage.getItem('userId');
  } catch (e) { return null; }
};

const extractId = (val) => {
  if (!val && val !== 0) return null;
  if (typeof val === 'string' || typeof val === 'number') return String(val);
  if (typeof val === 'object') return String(val._id || val.id || "");
  return null;
};

export default function NotifPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [invites, setInvites] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const userCache = useRef(new Map());
  const userId = getCurrentUserId();

  const fetchUserInfo = async (id) => {
    if (!id) return null;
    if (userCache.current.has(id)) return userCache.current.get(id);
    try {
      const res = await fetch(`/api/users/${encodeURIComponent(id)}`);
      if (!res.ok) return null;
      const u = await res.json();
      const name = u.pseudo || [u.firstName, u.lastName].filter(Boolean).join(' ') || "Unknown";
      const info = { id, name };
      userCache.current.set(id, info);
      return info;
    } catch (e) { return null; }
  };

  useEffect(() => {
    if (!userId) { setLoading(false); return; }
    async function load() {
      try {
        setLoading(true);
        const [invRes, msgRes] = await Promise.all([
          fetch(`/api/friends?operation=get-invitations&userId=${userId}`),
          fetch(`/api/messages?operation=get-by-user&userId=${userId}`)
        ]);

        const invPayload = await invRes.json();
        const msgPayload = await msgRes.json();

        // 1. Invitations
        const enrichedInv = await Promise.all((invPayload.invitations || []).map(async (inv) => {
          const sid = extractId(inv.senderId || inv.sender);
          const info = await fetchUserInfo(sid);
          return { ...inv, _senderId: sid, _senderName: info?.name };
        }));

        // 2. Messages - Filter for received and unseen
        const rawUnseen = (msgPayload.messages || []).filter(m => {
          const recStr = extractId(m.receiverId || m.receiver);
          return String(recStr) === String(userId) && m.isSeen !== true;
        });

        const enrichedMsgs = await Promise.all(rawUnseen.map(async (m) => {
          const sid = extractId(m.senderId || m.sender);
          const info = await fetchUserInfo(sid);
          return { ...m, _senderId: sid, _senderName: info?.name };
        }));

        setInvites(enrichedInv);
        setMessages(enrichedMsgs);
      } catch (err) {
        setError("Failed to sync notifications");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [userId]);

  // GROUPING LOGIC: Only the last message per user
  const latestMessagesPerUser = useMemo(() => {
    const map = new Map();
    messages.forEach(m => {
      const sid = m._senderId;
      const existing = map.get(sid) || { count: 0, lastMsg: null };
      map.set(sid, {
        count: existing.count + 1,
        lastMsg: m // Overwrites with the latest one in the array
      });
    });
    return Array.from(map.values());
  }, [messages]);

  const acceptInvite = async (requestId) => {
    await fetch(`/api/friends`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ requestId, action: "accept" }) });
    setInvites(inv => inv.filter(i => (i._id || i.id) !== requestId));
  };

  const markRead = async (senderId) => {
    const idsToMark = messages.filter(m => m._senderId === senderId).map(m => m._id || m.id);
    await fetch(`/api/messages/mark-seen`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messageIds: idsToMark, userId, otherUserId: senderId })});
    setMessages(prev => prev.filter(m => m._senderId !== senderId));
  };

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></Box>;

  return (
    <Box sx={{ minHeight: '100vh', p: { xs: 2, md: 4 }, background: '#ffffff' }}>
      <GlobalStyles styles={{ '*::-webkit-scrollbar': { width: '8px' }, '*::-webkit-scrollbar-thumb': { background: colors.indigo[200], borderRadius: '10px' } }} />
      
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={900} sx={{ mb: 4, color: colors.indigo[900], letterSpacing: '-1px' }}>
          Notifications
        </Typography>

        {/* INVITATIONS */}
        <Paper sx={{ p: 3, borderRadius: '16px', mb: 3, border: '1px solid #eee', bgcolor: '#ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
          <Typography variant="h6" fontWeight={800} sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonAddIcon color="primary" /> Friend Requests
          </Typography>
          {invites.length === 0 ? (
            <Typography variant="body2" color="text.secondary">All caught up!</Typography>
          ) : (
            <List disablePadding>
              {invites.map((inv, idx) => (
                <ListItem key={inv._id || inv.id} sx={{ px: 0, py: 2, borderBottom: idx !== invites.length -1 ? '1px solid #eee' : 'none' }}>
                  <ListItemAvatar>
                    <Avatar sx={{ background: colors.indigo[500], fontWeight: 700 }}>{inv._senderName?.[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={<Typography fontWeight={700}>{inv._senderName}</Typography>} secondary="wants to connect" />
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small" onClick={() => acceptInvite(inv._id || inv.id)} sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 700 }}>Accept</Button>
                    <Button variant="outlined" color="inherit" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }}>Ignore</Button>
                  </Stack>
                </ListItem>
              ))}
            </List>
          )}
        </Paper>

        {/* MESSAGES */}
        <Paper sx={{ p: 3, borderRadius: '16px', border: '1px solid #eee', bgcolor: '#ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
          <Typography variant="h6" fontWeight={800} sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <MailIcon color="primary" /> Unread Messages
          </Typography>
          {latestMessagesPerUser.length === 0 ? (
            <Typography variant="body2" color="text.secondary">No new messages.</Typography>
          ) : (
            <List disablePadding>
              {latestMessagesPerUser.map(({ count, lastMsg }, idx) => (
                <ListItem 
                  key={lastMsg._id} 
                  sx={{ 
                    px: 0, py: 2, 
                    borderBottom: idx !== latestMessagesPerUser.length -1 ? '1px solid #eee' : 'none',
                    transition: '0.2s', '&:hover': { bgcolor: 'rgba(255,255,255,0.4)' }
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ background: `linear-gradient(45deg, ${colors.pink[400]}, ${colors.purple[500]})`, fontWeight: 700 }}>
                      {lastMsg._senderName?.[0]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography fontWeight={800}>{lastMsg._senderName}</Typography>
                        {count > 1 && <Chip label={`+${count - 1} more`} size="small" sx={{ height: 18, fontSize: 10, fontWeight: 700, bgcolor: colors.indigo[100], color: colors.indigo[900] }} />}
                      </Stack>
                    } 
                    secondary={
                      <Typography variant="body2" color="text.secondary" noWrap sx={{ maxWidth: '300px' }}>
                        {lastMsg.text || "Sent an attachment"}
                      </Typography>
                    } 
                  />
                  <Stack direction="row" spacing={1}>
                    <IconButton onClick={() => markRead(lastMsg._senderId)} sx={{ color: colors.grey[400] }}>
                      <Typography variant="caption" sx={{ mr: 1 }}>Mark Read</Typography>
                    </IconButton>
                    <Button 
                      variant="contained" 
                      onClick={() => router.push(`/uis/user-space/chat/${lastMsg._senderId}`)}
                      startIcon={<ChatBubbleOutline />}
                      sx={{ borderRadius: '12px', fontWeight: 700, textTransform: 'none', background: colors.indigo[600] }}
                    >
                      Reply
                    </Button>
                  </Stack>
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      </Container>
    </Box>
  );
}