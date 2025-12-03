/** Next Imports */
import { NextResponse } from "next/server";
/** Data Models Imports */
import mongoose from "mongoose";
import { Friend, User } from "../models.js";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

/**
 * GET operations supported:
 * - operation=get-invitations&userId=<id>    => pending requests where receiverId == userId
 * - operation=get-friends&userId=<id>        => accepted friendships for userId (returns populated friend user objects)
 * - operation=get-relationship&userA=<id>&userB=<id> => returns the friendship doc between two users (if any)
 */
export async function GET(request) {
  try {
    const operation = request.nextUrl.searchParams.get("operation");

    if (operation === "get-invitations") {
      const userId = request.nextUrl.searchParams.get("userId");
      if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400, headers: CORS_HEADERS });

      const invites = await Friend.find({ receiverId: userId, status: "pending" })
        .sort({ createdAt: -1 })
        .populate("senderId", "pseudo firstName lastName email")
        .lean();

      return NextResponse.json({ invitations: invites || [] }, { status: 200, headers: CORS_HEADERS });
    }

    if (operation === "get-friends") {
      const userId = request.nextUrl.searchParams.get("userId");
      if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400, headers: CORS_HEADERS });

      // Find all accepted friendships where user is either sender or receiver
      const friends = await Friend.find({
        status: "accepted",
        $or: [{ senderId: userId }, { receiverId: userId }],
      }).lean();

      // Map to the "other" user and populate their basic info
      const otherIds = friends.map(f => (String(f.senderId) === String(userId) ? f.receiverId : f.senderId));
      const uniqueIds = Array.from(new Set(otherIds.map(String)));

      const users = await User.find({ _id: { $in: uniqueIds } }, "pseudo firstName lastName email").lean();

      return NextResponse.json({ friends: users || [] }, { status: 200, headers: CORS_HEADERS });
    }

    if (operation === "get-relationship") {
      const userA = request.nextUrl.searchParams.get("userA");
      const userB = request.nextUrl.searchParams.get("userB");
      if (!userA || !userB) return NextResponse.json({ error: "Missing userA or userB" }, { status: 400, headers: CORS_HEADERS });

      const rel = await Friend.findOne({
        $or: [
          { senderId: userA, receiverId: userB },
          { senderId: userB, receiverId: userA },
        ],
      }).lean();

      return NextResponse.json({ relationship: rel || null }, { status: 200, headers: CORS_HEADERS });
    }

    return NextResponse.json({ error: "Unknown or unsupported GET operation" }, { status: 400, headers: CORS_HEADERS });
  } catch (error) {
    console.error("GET /api/friends error:", error);
    return NextResponse.json({ error: error.message || String(error) }, { status: 500, headers: CORS_HEADERS });
  }
}

/**
 * POST - create a friend request
 * Body: { senderId, receiverId }
 * If a request already exists, it will not create a duplicate; if previously refused, it will update to pending.
 */
export async function POST(request) {
  try {
    const data = await request.json();

    if (!data || !data.senderId || !data.receiverId) {
      return NextResponse.json({ error: "Missing senderId or receiverId" }, { status: 400, headers: CORS_HEADERS });
    }

    if (!mongoose.Types.ObjectId.isValid(data.senderId) || !mongoose.Types.ObjectId.isValid(data.receiverId)) {
      return NextResponse.json({ error: "Invalid ObjectId format" }, { status: 400, headers: CORS_HEADERS });
    }

    if (String(data.senderId) === String(data.receiverId)) {
      return NextResponse.json({ error: "Cannot send friend request to yourself" }, { status: 400, headers: CORS_HEADERS });
    }

    // Check existing
    const existing = await Friend.findOne({
      $or: [
        { senderId: data.senderId, receiverId: data.receiverId },
        { senderId: data.receiverId, receiverId: data.senderId },
      ],
    });

    if (existing) {
      if (existing.status === "accepted") {
        return NextResponse.json({ error: "You are already friends" }, { status: 400, headers: CORS_HEADERS });
      }
      // If refused or pending, update sender/receiver and set to pending
      existing.senderId = data.senderId;
      existing.receiverId = data.receiverId;
      existing.status = "pending";
      await existing.save();

      // Populate before returning so client always receives sender info
      await existing.populate({ path: "senderId", select: "pseudo firstName lastName" });

      return NextResponse.json({ request: existing }, { status: 200, headers: CORS_HEADERS });
    }

    const fr = new Friend({
      senderId: data.senderId,
      receiverId: data.receiverId,
      status: "pending",
    });
    await fr.save();

    // Modern Mongoose (v6+) returns a promise from populate; execPopulate() was removed.
    // Populate senderId on the saved document and return it.
    await fr.populate({ path: "senderId", select: "pseudo firstName lastName" });
    const saved = fr;

    return NextResponse.json({ request: saved }, { status: 201, headers: CORS_HEADERS });
  } catch (error) {
    console.error("POST /api/friends error:", error);
    return NextResponse.json({ error: error.message || String(error) }, { status: 500, headers: CORS_HEADERS });
  }
}

/**
 * PATCH - update a friend request (accept or refuse)
 * Body: { requestId, action } where action is 'accept' or 'refuse'
 */
export async function PATCH(request) {
  try {
    const data = await request.json();

    if (!data || !data.requestId || !data.action) {
      return NextResponse.json({ error: "Missing requestId or action" }, { status: 400, headers: CORS_HEADERS });
    }

    if (!mongoose.Types.ObjectId.isValid(data.requestId)) {
      return NextResponse.json({ error: "Invalid requestId" }, { status: 400, headers: CORS_HEADERS });
    }

    const fr = await Friend.findById(data.requestId);
    if (!fr) {
      return NextResponse.json({ error: "Friend request not found" }, { status: 404, headers: CORS_HEADERS });
    }

    if (data.action === "accept") {
      fr.status = "accepted";
      await fr.save();
      return NextResponse.json({ request: fr }, { status: 200, headers: CORS_HEADERS });
    }

    if (data.action === "refuse") {
      fr.status = "refused";
      await fr.save();
      return NextResponse.json({ request: fr }, { status: 200, headers: CORS_HEADERS });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400, headers: CORS_HEADERS });
  } catch (error) {
    console.error("PATCH /api/friends error:", error);
    return NextResponse.json({ error: error.message || String(error) }, { status: 500, headers: CORS_HEADERS });
  }
}