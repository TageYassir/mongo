import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export async function OPTIONS(request) {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

function ensureUploadsDir() {
  const uploadsDir = path.join(process.cwd(), "public", "uploads")
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true })
  }
  return uploadsDir
}

export async function POST(request) {
  try {
    const formData = await request.formData()
    let file = formData.get("file")

    // fallback: pick first file-like entry if field name differs
    if (!file) {
      for (const entry of formData.values()) {
        if (entry && typeof entry === "object" && (typeof entry.stream === "function" || typeof entry.arrayBuffer === "function")) {
          file = entry
          break
        }
      }
    }

    if (!file || typeof file.arrayBuffer !== "function") {
      return NextResponse.json({ error: "No file uploaded or unsupported file object" }, { status: 400, headers: CORS_HEADERS })
    }

    const origName = file.name || `upload-${Date.now()}`
    const ext = path.extname(origName)
    const base = path.basename(origName, ext).replace(/[^a-z0-9_\-]/gi, "_")
    const filename = `${Date.now()}-${base}${ext || ""}`
    const uploadsDir = ensureUploadsDir()
    const destPath = path.join(uploadsDir, filename)

    // Read the web File/Blob as ArrayBuffer and write to disk
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    await fs.promises.writeFile(destPath, buffer)

    const stat = await fs.promises.stat(destPath)
    const size = stat.size
    const mimeType = file.type || null
    const url = `/uploads/${filename}`

    const fileMeta = { url, filename, size: Number(size || 0), mimeType }

    return NextResponse.json({ file: fileMeta }, { status: 200, headers: CORS_HEADERS })
  } catch (err) {
    console.error("POST /api/messages/upload error:", err)
    return NextResponse.json({ error: err.message || String(err) }, { status: 500, headers: CORS_HEADERS })
  }
}