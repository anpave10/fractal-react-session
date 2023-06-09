import { createSlice } from '@reduxjs/toolkit'
import { UserInitialState } from '../../models/userSlice'

export const userSlice = createSlice({
  name: 'user',
  initialState: UserInitialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload
    },
    resetUser: () => {
      return UserInitialState
    }
  }
})

export const { setUser, resetUser } = userSlice.actions