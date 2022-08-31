import { createSlice } from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
    prices: [],
  },
  reducers: {
    init: (state, { payload: { prices, carts } }) => {
      state.carts = carts;
      state.prices = prices;
    },
    itemMount: (state, { payload: { price, order } }) => {
      state.prices[order] += price;
    },
    deleteItem: (state, { payload: { order, productOrder, price, product } }) => {
      state.prices[order] -= price;
      document.getElementById(`product${productOrder}${product.price}`).style.display = "none";
    },
    changeItemsQuantity: (
      state,
      { payload: { order, price, quantity, oneProductPrice, productId } }
    ) => {
      let productIndex;
      for (let i = 0; i < state.carts[order].products.length; i++) {
        if (productId == state.carts[order].products[i].productId) {
          productIndex = i;
          break;
        }
      }
      state.prices[order] -= price;
      state.prices[order] +=
        Number(oneProductPrice).toFixed(0) * Number(quantity);
      state.carts[order].products[productIndex].quantity = quantity;
    },
    deleteStoreCart: (state, { payload: { order } }) => {
      document.getElementById(`cart${order}`).style.display = "none";
    },
    addItemToCart: (state, { payload: { quantity, productId, order } }) => {
      state.carts[order].products.push({
        productId: productId,
        quantity: quantity,
      });
    },
    addStorageNewCart: (state, { payload: { cart } }) => {
      state.carts.push(cart);
      state.prices.push(0);
    },
  },
});

export const {
  deleteItem,
  deleteStoreCart,
  changeItemsQuantity,
  init,
  itemMount,
  addItemToCart,
  addStorageNewCart
} = cartsSlice.actions;

export default cartsSlice;
