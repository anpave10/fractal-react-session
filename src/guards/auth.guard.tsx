import { useSelector } from 'react-redux'
import { AppStore } from '../models/store'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthGuard = () => {
  const { id } = useSelector((state: AppStore) => state.user)
  const location = useLocation()
  const {pathname} = location

  if(id !== '' && pathname==='/login'){

    return <Navigate to={'/dashboard'} />
  }

  return id !== '' ? <Outlet/> : <Navigate to={'/login'} />
}

export default AuthGuard