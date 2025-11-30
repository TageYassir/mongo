"use client"

/** React Imports */
import { useState } from "react"
/** Next Navigation */
import { useSearchParams, useRouter } from "next/navigation"
/** MUI Imports */
import { Button, Container, Stack, TextField, Typography } from "@mui/material"

export default function VerifyPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const email = searchParams.get("email") // récupère l’email depuis l’URL
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const verifyEmail = async () => {
    setError("")
    setSuccess("")

    if (!code) {
      setError("Please enter the verification code.")
      return
    }

    try {
      const response = await fetch(`http://localhost:3000/api/users?operation=verify-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code })
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        return
      }

      setSuccess("Email verified successfully! You can now login.")
      // Optionnel : redirection vers login après 2 secondes
      setTimeout(() => {
        router.push("/uis")
      }, 2000)

    } catch (err) {
      console.error(err)
      setError("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h5">Verify Your Email</Typography>
        <Typography variant="body2">
          We sent a verification code to <strong>{email}</strong>. Please enter it below.
        </Typography>

        <TextField
          label="Verification Code"
          variant="outlined"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}

        <Button variant="contained" size="large" onClick={verifyEmail}>
          Verify
        </Button>
      </Stack>
    </Container>
  )
}
