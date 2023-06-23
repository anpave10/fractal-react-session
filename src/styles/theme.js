import { createTheme } from '@mui/material'

const themeOptions = createTheme({

  palette: {
    mode: 'dark',
    primary: {
      main: '#3F92AF',
    },
    secondary: {
      main: '#f50057',
    },
    customGreen: {
      main: '#31AE28'
    }
  },
})

export default themeOptions