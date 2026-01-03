'use server'

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Message } from "../../models.js";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

/**
 * POST /api/messages/mark-seen
 * Body can be one of:
 *  - { messageIds: [id], userId?: id }                 // mark specific messages (optionally ensure receiver)
 *  - { userId: id }                                    // mark all messages received by userId
 *  - { userId: id, otherUserId: id }                   // mark all messages received by userId FROM otherUserId
 */
export async function POST(request) {
  try {
    const data = await request.json();

    // Build query based on provided payload
    const query = {};
    // Case A: explicit message ids
    if (Array.isArray(data?.messageIds) && data.messageIds.length > 0) {
      // normalize to strings and keep only valid ObjectId strings
      const validIdStrs = data.messageIds
        .map(id => {
          if (!id && id !== 0) return null;
          if (typeof id === 'object' && id.toString) return id.toString();
          return String(id);
        })
        .filter(id => typeof id === 'string' && mongoose.Types.ObjectId.isValid(id));

      if (validIdStrs.length === 0) {
        return NextResponse.json({ error: "No valid messageIds provided" }, { status: 400, headers: CORS_HEADERS });
      }

      // Use string ids in $in — Mongoose accepts hex id strings
      query._id = { $in: validIdStrs };

      // optionally ensure receiver matches provided userId
      if (data.userId && mongoose.Types.ObjectId.isValid(String(data.userId))) {
        query.receiverId = String(data.userId);
      }
    } else if (data?.userId && data?.otherUserId) {
      // Case B: mark all messages where receiverId == userId AND senderId == otherUserId
      if (!mongoose.Types.ObjectId.isValid(String(data.userId)) || !mongoose.Types.ObjectId.isValid(String(data.otherUserId))) {
        return NextResponse.json({ error: "Invalid userId or otherUserId" }, { status: 400, headers: CORS_HEADERS });
      }
      query.receiverId = String(data.userId);
      query.senderId = String(data.otherUserId);
    } else if (data?.userId) {
      // Case C: mark all messages where receiverId == userId
      if (!mongoose.Types.ObjectId.isValid(String(data.userId))) {
        return NextResponse.json({ error: "Invalid userId" }, { status: 400, headers: CORS_HEADERS });
      }
      query.receiverId = String(data.userId);
    } else {
      return NextResponse.json({ error: "Provide messageIds or userId (and optional otherUserId)" }, { status: 400, headers: CORS_HEADERS });
    }

    const res = await Message.updateMany(query, { $set: { isSeen: true } });
    return NextResponse.json({ updatedCount: res.modifiedCount || res.nModified || 0 }, { status: 200, headers: CORS_HEADERS });
  } catch (err) {
    console.error("POST /api/messages/mark-seen error:", err);
    return NextResponse.json({ error: err.message || String(err) }, { status: 500, headers: CORS_HEADERS });
  }
}