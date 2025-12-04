import './globals.css'

export const metadata = {
  title: 'App',
  description: 'Application with global scroll locked',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}