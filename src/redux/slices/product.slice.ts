import { createSlice } from '@reduxjs/toolkit'
import { ProductInitialState } from '../../models/productSlice'

export const productSlice = createSlice({
  name: 'product',
  initialState: ProductInitialState,
  reducers: {
    createProduct: (state, action) => {
      console.log(state)
      return action.payload
    },
    resetProduct: () => {
      return ProductInitialState
    }
  }
})

export const { createProduct, resetProduct } = productSlice.actions