import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ApolloProvider } from '@apollo/client'
import themeOptions from './styles/theme.js'
import client from './graphql/apolloClient.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline/>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
