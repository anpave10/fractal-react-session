import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Suspense, lazy } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Pokemon from './pages/Pokemon/Pokemon'
import AuthGuard from './guards/auth.guard'
import { useSelector } from 'react-redux'
import { AppStore } from './models/store'

function App() {
  const Login = lazy(() => import('../src/pages/Login/Login'))
  const SignUp = lazy(() => import('../src/pages/SignUp/SignUp'))
  const Dashboard = lazy(() => import('../src/pages/Dashboard/Dashboard'))
  const { id } = useSelector((state: AppStore) => state.user)
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={'/dashboard'} />} />
            <Route path='/login' element={id !== '' ? <AuthGuard/>:<Login/>}/>
            <Route path="/sign-up" element={<SignUp />} />
            <Route element={<AuthGuard/>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pokemon-graph" element={<Pokemon/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
