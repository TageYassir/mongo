/** Next Imports */
import { NextResponse } from "next/server"
/** Data Models Imports */
import { User } from "../models.js"
import nodemailer from "nodemailer";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

/** Handle preflight */
export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

/** Generate verification/recovery code */
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/** Helper: create gmail transporter (keeps same credentials as provided) */
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Fftt7252@gmail.com",
      pass: "soae wjwy yvdz iwwc"
    }
  })
}

/** GET Method - support read-only operations from browser (e.g. get-all-users, online) */
export async function GET(request) {
  try {
    const operation = request.nextUrl.searchParams.get("operation")
    const q = request.nextUrl.searchParams.get("q") || ""

    // New: check if a pseudo is available
    if (operation === "check-pseudo") {
      const pseudo = (request.nextUrl.searchParams.get("pseudo") || "").trim()
      if (!pseudo) {
        return NextResponse.json({ error: "Missing pseudo" }, { status: 400, headers: CORS_HEADERS })
      }
      const found = await User.findOne({ pseudo }).lean()
      return NextResponse.json({ available: !Boolean(found) }, { status: 200, headers: CORS_HEADERS })
    }

    if (operation === "get-all-users") {
      // If a query is provided, perform a case-insensitive search on multiple fields.
      if (q && q.trim() !== "") {
        // Escape regex special chars to avoid unintended regex behavior
        const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        const re = new RegExp(escaped, "i")

        // Search pseudo, firstName, lastName, email
        const users = await User.find({
          $or: [
            { pseudo: re },
            { firstName: re },
            { lastName: re },
            { email: re },
          ],
        }).limit(50).lean()

        users.forEach((u) => { if (u.password) delete u.password })
        return NextResponse.json({ users }, { status: 200, headers: CORS_HEADERS })
      }

      // No query: return all users (you may want to paginate for large collections)
      const users = await User.find().lean()
      users.forEach((u) => { if (u.password) delete u.password })
      return NextResponse.json({ users }, { status: 200, headers: CORS_HEADERS })
    }

    if (operation === "online") {
      const onlineUsers = await User.find({ isOnline: true }).lean()
      onlineUsers.forEach((u) => { if (u.password) delete u.password })
      return NextResponse.json({ users: onlineUsers }, { status: 200, headers: CORS_HEADERS })
    }

    // Unknown or unsupported GET operation
    return NextResponse.json({ error: "Unknown or unsupported GET operation" }, { status: 400, headers: CORS_HEADERS })
  } catch (error) {
    return NextResponse.json({ error: error.message || String(error) }, { status: 500, headers: CORS_HEADERS })
  }
}

/** POST Method - create, login, update, recover, logout, set-online, etc. */
export async function POST(request) {
  try {
    const operation = request.nextUrl.searchParams.get("operation")

    if (operation === "create") {
      const data = await request.json()

      if (!data || !data.email || !data.password) {
        return NextResponse.json(
          { error: "Missing required fields (email and password)." },
          { status: 400, headers: CORS_HEADERS }
        )
      }

      // Normalize email and pseudo for comparison
      const emailNorm = String(data.email).trim().toLowerCase()
      const pseudoNorm = data.pseudo ? String(data.pseudo).trim() : ""

      // Check for existing user by email OR pseudo
      const existing = await User.findOne({ $or: [{ email: emailNorm }, ...(pseudoNorm ? [{ pseudo: pseudoNorm }] : [])] }).lean()
      if (existing) {
        // Prefer a clear message about which field conflicts
        if (existing.email && existing.email.toLowerCase() === emailNorm) {
          return NextResponse.json(
            { error: "A user with this email already exists." },
            { status: 409, headers: CORS_HEADERS }
          )
        }
        if (pseudoNorm && existing.pseudo === pseudoNorm) {
          return NextResponse.json(
            { error: "Pseudo already taken." },
            { status: 409, headers: CORS_HEADERS }
          )
        }
        // Generic conflict fallback
        return NextResponse.json(
          { error: "User already exists." },
          { status: 409, headers: CORS_HEADERS }
        )
      }

      // Create: include validation code and send verification email
      const code = generateCode()
      const toCreate = {
        ...data,
        email: emailNorm,
        validationCode: code
      }

      const created = await User.create(toCreate)
      const out = created && created.toObject ? created.toObject() : created
      if (out && out.password) delete out.password

      // Transport and send verification email
      const transporter = createTransporter()

      await transporter.sendMail({
        from: '"Chocolat Social" <Fftt7252@gmail.com>', // nom + email
        to: data.email,                                 // email de l’utilisateur
        subject: "🔒 Verify Your Email for Chocolat Social",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Welcome to Chocolat Social!</h2>
            <p>Hi <strong>${data.pseudo || ""}</strong>,</p>
            <p>Thank you for registering. Please use the verification code below to activate your account:</p>
            <div style="margin: 20px 0; text-align: center;">
              <span style="font-size: 24px; font-weight: bold; color: #4caf50; padding: 10px 20px; border: 2px dashed #4caf50; border-radius: 8px;">
                ${code}
              </span>
            </div>
            <p>If you did not register on Chocolat Social, please ignore this email.</p>
            <p style="font-size: 12px; color: #777;">© 2025 Chocolat Social. All rights reserved.</p>
          </div>
        `
      });

      return NextResponse.json({ message: "User created, check your email" }, { status: 201, headers: CORS_HEADERS })
    }

    if (operation === "login") {
      const data = await request.json()
      if (!data || !data.email || !data.password) {
        return NextResponse.json({ error: "Missing email or password" }, { status: 400, headers: CORS_HEADERS })
      }

      // NOTE: this repo currently uses plaintext passwords; replace with hashed passwords (bcrypt) later.
      const user = await User.findOne({ email: data.email, password: data.password }).lean()
      if (!user) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401, headers: CORS_HEADERS })
      }

      if (user.password) delete user.password
      return NextResponse.json({ user }, { status: 200, headers: CORS_HEADERS })
    }

    /**
     * NEW: set-online operation
     * Accepts JSON body { id } or { userId } OR query params ?id=... or ?userId=...
     * Marks user as online and updates lastActive timestamp.
     */
    if (operation === "set-online") {
      // resilient parsing: prefer JSON body but fall back to URL search params
      let data = null
      try {
        data = await request.json().catch(() => null)
      } catch (e) {
        data = null
      }

      let id = data?.id || data?.userId || null

      try {
        const url = new URL(request.url)
        id = id || url.searchParams.get('id') || url.searchParams.get('userId') || null
      } catch (e) {
        // ignore URL parsing errors
      }

      if (!id) {
        return NextResponse.json({ error: "Missing user id" }, { status: 400, headers: CORS_HEADERS })
      }

      const updated = await User.findByIdAndUpdate(
        id,
        { $set: { isOnline: true, lastActive: new Date() } },
        { new: true, runValidators: true, context: 'query' }
      ).lean()

      if (!updated) {
        return NextResponse.json({ error: "User not found" }, { status: 404, headers: CORS_HEADERS })
      }

      if (updated.password) delete updated.password
      return NextResponse.json({ user: updated }, { status: 200, headers: CORS_HEADERS })
    }

    if (operation === "logout") {
      // Expect body: { id: "<userObjectId>" }
      const data = await request.json().catch(() => null)
      const id = data?.id
      if (!id) {
        return NextResponse.json({ error: "Missing user id" }, { status: 400, headers: CORS_HEADERS })
      }

      const updated = await User.findByIdAndUpdate(
        id,
        { isOnline: false },
        { new: true, runValidators: true, context: 'query' }
      ).lean()

      if (!updated) {
        return NextResponse.json({ error: "User not found" }, { status: 404, headers: CORS_HEADERS })
      }

      if (updated.password) delete updated.password
      return NextResponse.json({ user: updated }, { status: 200, headers: CORS_HEADERS })
    }

    if (operation === "update") {
      return NextResponse.json({ result: null }, { status: 200, headers: CORS_HEADERS })
    }

    if (operation === "verify-code") {
      // make body parsing resilient and normalize email for lookup
      const data = await request.json().catch(() => null)
      const email = data?.email ? String(data.email).trim().toLowerCase() : ""
      const code = data?.code ? String(data.code).trim() : ""
      if (!email || !code) {
        return NextResponse.json({ error: "Missing email or code" }, { status: 400, headers: CORS_HEADERS })
      }

      const user = await User.findOne({ email, validationCode: code })
      if (!user) {
        return NextResponse.json({ error: "Invalid code" }, { status: 400, headers: CORS_HEADERS })
      }

      user.isValidated = true
      user.validationCode = null
      await user.save()

      return NextResponse.json({ message: "Email verified successfully" }, { status: 200, headers: CORS_HEADERS })
    }

    if (operation === "recover") {
      const data = await request.json()
      const email = data?.email
      if (!email) {
        return NextResponse.json({ error: "Missing email" }, { status: 400, headers: CORS_HEADERS })
      }

      const user = await User.findOne({ email })
      if (!user) {
        return NextResponse.json({ error: "Email not found" }, { status: 404, headers: CORS_HEADERS })
      }

      // Générer code de récupération
      const code = generateCode()
      user.recoveryCode = code
      await user.save()

      // Envoi email
      const transporter = createTransporter()

      await transporter.sendMail({
        from: '"Chocolat Social" <Fftt7252@gmail.com>',
        to: user.email,
        subject: "Password Recovery Code",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
            <h2>Password Recovery</h2>
            <p>Your recovery code is:</p>
            <div style="text-align: center; margin: 20px;">
              <span style="font-size: 24px; font-weight: bold; color: #f44336;">${code}</span>
            </div>
            <p>If you did not request a password reset, ignore this email.</p>
          </div>
        `
      });

      return NextResponse.json({ message: "Recovery code sent to your email" }, { status: 200, headers: CORS_HEADERS })
    }

    if (operation === "reset-password") {
      const data = await request.json()
      const { email, code, newPassword } = data || {}

      if (!email || !code || !newPassword) {
        return NextResponse.json({ error: "Missing email, code or newPassword" }, { status: 400, headers: CORS_HEADERS })
      }

      const user = await User.findOne({ email, recoveryCode: code })
      if (!user) {
        return NextResponse.json({ error: "Invalid code or email" }, { status: 400, headers: CORS_HEADERS })
      }

      user.password = newPassword
      user.recoveryCode = null
      await user.save()

      return NextResponse.json({ message: "Password reset successfully" }, { status: 200, headers: CORS_HEADERS })
    }

    // Unrecognized operation for POST
    return NextResponse.json({ error: "Unknown operation" }, { status: 400, headers: CORS_HEADERS })
  } catch (error) {
    return NextResponse.json({ error: error.message || String(error) }, { status: 500, headers: CORS_HEADERS })
  }
}