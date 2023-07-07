import { createSlice } from '@reduxjs/toolkit'

const UserInitialState = {
  email: '',
  id: '',
  accessToken: '',
  firstName: '',
  lastName: ''
}

const setDataInLocalStorage = (user: any) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : UserInitialState
}

export const userSlice = createSlice({
  name: 'user',
  initialState: getUserFromLocalStorage(),
  reducers: {
    setUser: (state, action) => {
      console.log(state)
      setDataInLocalStorage(action.payload)
      return action.payload
    },
    resetUser: () => {
      localStorage.removeItem('user')
      return UserInitialState
    }
  }
})

export const { setUser, resetUser } = userSlice.actions