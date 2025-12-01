import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // simple blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0', // simple purple
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Arial'].join(','),
    h1: { fontWeight: 700, fontSize: '2rem' },
    h2: { fontWeight: 600, fontSize: '1.5rem' },
    body1: { fontSize: '1rem' },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fafafa',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '8px 14px',
          transition: 'background-color 0.2s ease',
        },
        contained: {
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: 'none',
        },
      },
    },
  },
  shape: { borderRadius: 4 },
  spacing: 8,
})

export default theme