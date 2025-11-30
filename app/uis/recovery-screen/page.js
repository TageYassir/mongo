"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, Container, Stack, TextField, Typography } from "@mui/material"

export default function RecoveryScreen() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleRecovery = async () => {
    setError("")
    setSuccess("")

    if (!email) {
      setError("Please enter your email.")
      return
    }

    try {
      const response = await fetch(`/api/users?operation=recover`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        return
      }

      setSuccess("Check your email for the recovery code.")
      // Redirection vers Reset Password avec email
      router.push(`reset-password?email=${encodeURIComponent(email)}`)

    } catch (err) {
      console.error(err)
      setError("An unexpected error occurred.")
    }
  }

  return (
    <Container maxWidth="sm">
      <Stack direction="column" spacing={2} mt={5}>
        <Typography variant="h5" textAlign="center">Password Recovery</Typography>
        <TextField 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="success.main">{success}</Typography>}
        <Button variant="contained" onClick={handleRecovery}>Send Recovery Code</Button>
      </Stack>
    </Container>
  )
}
