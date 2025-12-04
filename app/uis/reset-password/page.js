"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Container, Stack, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export default function ResetPasswordPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Récupère l'email depuis l'URL si présent
  const emailFromQuery = searchParams.get("email") || ""
  const [email, setEmail] = useState(emailFromQuery)
  const [code, setCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Add show/hide password state and handlers
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword((s) => !s)
  const handleMouseDownPassword = (e) => e.preventDefault()

  function isStrongPassword(pwd) {
  if (!pwd || typeof pwd !== 'string') return false
  const trimmed = pwd
  if (trimmed.length < 8) return false
  const hasUpper = /[A-Z]/.test(trimmed)
  const hasLower = /[a-z]/.test(trimmed)
  const hasDigit = /[0-9]/.test(trimmed)
  const hasSpecial = /[^A-Za-z0-9]/.test(trimmed)
  return hasUpper && hasLower && hasDigit && hasSpecial
}

  const handleReset = async () => {
    setError("")
    setSuccess("")

    if (!isStrongPassword(newPassword)) {
      setError('Password must be ≥8 chars with upper, lower, digit and special character.')
      return
    }
    else if (!email || !code || !newPassword) {
      setError("Please fill in all fields.")
      return
    }

    try {
      const response = await fetch("/api/users?operation=reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code, newPassword })
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        return
      }

      setSuccess("Password reset successfully! You can now log in.")
      // Redirection vers login après 2 secondes
      setTimeout(() => router.push("/uis"), 2000)

    } catch (err) {
      console.error(err)
      setError("An unexpected error occurred.")
    }
  }

  return (
    <Container maxWidth="sm">
      <Stack direction="column" spacing={2} mt={5}>
        <Typography variant="h5" textAlign="center">Reset Your Password</Typography>
        
        <TextField 
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField 
          label="Recovery Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <TextField 
          label="New Password"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={toggleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="success.main">{success}</Typography>}

        <Button variant="contained" size="large" onClick={handleReset}>
          Reset Password
        </Button>
      </Stack>
    </Container>
  )
}
