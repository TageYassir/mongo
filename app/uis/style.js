// Enhanced Material-UI theme
// - Refined palette with semantic tokens
// - Improved typography scale and responsive sizes
// - Subtle elevation and focus styles
// - Component style overrides for a modern, accessible look
// - Utility tokens for consistent spacing and rounded corners

import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// Base colors (kept readable and accessible)
const palette = {
  mode: 'light',
  primary: {
    main: '#1565c0', // deep blue
    light: '#4f83cc',
    dark: '#0f4a8a',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#7c4dff', // vibrant violet
    light: '#a982ff',
    dark: '#5a20b1',
    contrastText: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    contrastText: '#fff',
  },
  warning: {
    main: '#ed6c02',
    contrastText: '#111',
  },
  error: {
    main: '#d32f2f',
    contrastText: '#fff',
  },
  info: {
    main: '#0288d1',
    contrastText: '#fff',
  },
  background: {
    default: '#f6f8fa',
    paper: '#ffffff',
    subtle: '#fbfdff',
  },
  text: {
    primary: '#0f1720',
    secondary: '#556067',
    muted: '#7a8791',
  },
  // Neutral greys for borders and subtle UI
  neutral: {
    50: '#fafbfc',
    100: '#f3f6f8',
    200: '#e6eef2',
    300: '#d6e3e9',
    400: '#bfcfd6',
    500: '#97a7b0',
    600: '#6f7d86',
  },
}

// Custom shadows (soft, modern)
const customShadows = [
  'none',
  '0 1px 2px rgba(12,18,28,0.04)',
  '0 2px 8px rgba(12,18,28,0.06)',
  '0 6px 18px rgba(12,18,28,0.08)',
  '0 10px 28px rgba(12,18,28,0.10)',
  '0 18px 40px rgba(12,18,28,0.12)',
]

// Rhythm and shape
const shape = { borderRadius: 12 }
const spacing = 8 // base spacing multiplier

const rawTheme = createTheme({
  palette,
  shape,
  spacing,
  shadows: customShadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Inter', 'Inter var', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    htmlFontSize: 16,
    h1: { fontSize: '2.25rem', lineHeight: 1.08, fontWeight: 700 },
    h2: { fontSize: '1.75rem', lineHeight: 1.12, fontWeight: 700 },
    h3: { fontSize: '1.375rem', lineHeight: 1.18, fontWeight: 700 },
    h4: { fontSize: '1.125rem', lineHeight: 1.25, fontWeight: 600 },
    subtitle1: { fontSize: '0.98rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.95rem', lineHeight: 1.5 },
    caption: { fontSize: '0.82rem', color: palette.text.muted },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0.2,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `linear-gradient(180deg, ${palette.background.subtle} 0%, ${palette.background.default} 100%)`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          color: palette.text.primary,
        },
        // modern scrollbar for webkit browsers (nice but optional)
        '::-webkit-scrollbar': {
          width: '10px',
          height: '10px',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(12,18,28,0.12)',
          borderRadius: 8,
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(12,18,28,0.18)',
        },
      },
    },

    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
      styleOverrides: {
        root: {
          paddingLeft: spacing * 3,
          paddingRight: spacing * 3,
          // Use an explicit media query instead of referencing rawTheme (avoids TDZ error)
          '@media (min-width:1200px)': {
            paddingLeft: spacing * 4,
            paddingRight: spacing * 4,
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'saturate(120%) blur(6px)',
          borderBottom: `1px solid ${palette.neutral[200]}`,
          boxShadow: 'none',
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
          paddingLeft: spacing * 1.5,
          paddingRight: spacing * 1.5,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 16px',
          transition: 'transform 140ms cubic-bezier(.2,.8,.2,1), box-shadow 140ms ease',
          '&:active': { transform: 'translateY(0px)' },
          '&:focus-visible': {
            outline: `3px solid ${palette.primary.light}`,
            outlineOffset: 2,
          },
        },
        containedPrimary: {
          boxShadow: customShadows[2],
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: customShadows[3],
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: palette.neutral[300],
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '&:focus-visible': {
            outline: `3px solid ${palette.primary.light}`,
            outlineOffset: 2,
          },
        },
      },
    },

    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: shape.borderRadius,
          backgroundClip: 'padding-box',
        },
        elevation0: {
          boxShadow: 'none',
        },
        elevation1: {
          boxShadow: customShadows[1],
        },
        elevation3: {
          boxShadow: customShadows[2],
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: customShadows[3],
          overflow: 'hidden',
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 280,
          borderRight: `1px solid ${palette.neutral[200]}`,
          paddingTop: spacing,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '&.Mui-selected': {
            backgroundColor: `${palette.primary.light}22`,
            color: palette.primary.main,
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 44,
        },
        indicator: {
          height: 3,
          borderRadius: 3,
          background: `linear-gradient(90deg, ${palette.primary.main}, ${palette.secondary.main})`,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.main,
            boxShadow: `0 6px 18px ${palette.primary.main}11`,
          },
        },
        notchedOutline: {
          borderColor: palette.neutral[200],
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
          fontWeight: 700,
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        badge: {
          border: `2px solid ${palette.background.paper}`,
          height: 12,
          minWidth: 12,
          padding: '0 4px',
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          backgroundColor: palette.text.primary,
          color: '#fff',
          fontSize: '0.85rem',
        },
      },
    },
  },
})

// Make fonts responsive
const theme = responsiveFontSizes(rawTheme)

export default theme