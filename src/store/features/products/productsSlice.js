import { createSlice } from "@reduxjs/toolkit";

let productsSlice = createSlice({
  name: "proudcts",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, { payload: { products } }) => {
      state.products = products;
    }
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice;
