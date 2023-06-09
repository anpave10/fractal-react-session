import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/user.slice'
import { productSlice } from './slices/product.slice'
import { AppStore } from '../models/store'

export const store = configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
    product: productSlice.reducer
  }
})