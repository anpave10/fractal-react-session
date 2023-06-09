import { createTheme } from '@mui/material'

export const themeOptions = createTheme({
  type: 'dark',
  palette: {
    primary: {
      main: '#3F92AF',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#4D4884',
    },
    customGreen: {
      main: '#31AE28'
    }
  },
})