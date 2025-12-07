import React from "react"
import ChatClient from "./ChatClient"

/**
 * Server-side page for /uis/chat/[id]
 * - Loads the receiver user from the database (if id present)
 * - Passes the receiver object and receiverId to the client ChatClient component
 *
 * Note: Uses the same models helper as the API route (app/api/models.js).
 * This avoids calling the API over HTTP from the server — we query the DB directly.
 */
import { connectToDatabase, User } from "../../../../api/models"

// utility: recursively convert Mongoose / BSON types to plain JSON-safe values
function toPlain(value) {
  if (value == null) return value
  if (Array.isArray(value)) return value.map(toPlain)
  if (value instanceof Date) return value.toISOString()

  if (typeof value === 'object') {
    if (value._bsontype === 'ObjectID' && typeof value.toString === 'function') {
      return value.toString()
    }
    const ctorName = value.constructor && value.constructor.name
    if ((ctorName === 'ObjectId' || ctorName === 'ObjectID') && typeof value.toString === 'function') {
      return value.toString()
    }
    const out = {}
    for (const k of Object.keys(value)) out[k] = toPlain(value[k])
    return out
  }
  return value
}

export default async function ChatPage({ params }) {
  // Await params per Next.js requirement before using its properties
  const awaitedParams = await params
  const receiverId = awaitedParams?.id || null

  let receiver = null

  if (receiverId) {
    try {
      await connectToDatabase()
      const u = await User.findById(receiverId).lean()
      if (u) {
        // remove password if present
        if (u.password) delete u.password
        receiver = u
      }
    } catch (err) {
      // ignore: we'll let the client fallback handle lookup if needed
      console.error("Server-side user lookup failed for chat page:", err)
      receiver = null
    }
  }

  // After loading receiver (Mongoose doc), convert to plain object
  const receiverPlain = receiver ? toPlain(receiver) : null

  // Pass sanitized plain object to client component
  return <ChatClient receiver={receiverPlain} receiverId={receiverId} />
}