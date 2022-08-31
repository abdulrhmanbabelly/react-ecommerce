import { createSlice } from "@reduxjs/toolkit";

let adminProductsSlice = createSlice({
  name: "adminProudcts",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, { payload: { products } }) => {
      state.products = products;
    },
    deleteStorageProduct: (state, { payload: { order } }) => {
      state.products.splice(order, 1);
    },
    updateStorageProduct: (state, { payload: { order, product } }) => {
      state.products[order] = product;
    },
    addStorageProduct : (state, { payload: { product } }) => {
        state.products.push(product)
    }
  },
});

export const { setProducts, deleteStorageProduct, updateStorageProduct, addStorageProduct } = adminProductsSlice.actions;
export default adminProductsSlice;
