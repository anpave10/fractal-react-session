import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

const themeOptions = createTheme<any>({
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
    text: {
      primary: '#fff'
    },
    customGreen: {
      main: '#31AE28'
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: '#40C169'
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline/>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
