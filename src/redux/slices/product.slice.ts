import { createSlice } from "@reduxjs/toolkit";
import { ProductInitialState } from "../../models/productSlice";

export const productSlice = createSlice({
    name: 'product',
    initialState: ProductInitialState,
    reducers: {
        createProduct: (state, action) => {
            return action.payload;
        },
        resetProduct: () => {
            return ProductInitialState;
        }
    }
})

export const { createProduct, resetProduct } = productSlice.actions;