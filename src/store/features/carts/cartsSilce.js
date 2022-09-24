import { createSlice } from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
  },
  reducers: {
    init: (state, { payload: { carts } }) => {
      state.carts = carts.map((cart) => {
        return {
          userId: cart.userId,
          price: 0,
          products: cart.products,
          id: cart.id,
          date: cart.date,
        };
      });
    },
    itemMount: (state, { payload: { price, order } }) => {
      state.carts[order].price += price;
    },
    deleteItem: (state, { payload: { order, productOrder, price } }) => {
      state.carts[order].products.splice(productOrder, 1);
      state.carts[order].price -= price;
    },
    changeItemsQuantity: (
      state,
      { payload: { quantity, productId, oneProductPrice, price, order } }
    ) => {
      let productIndex;
      for (let i = 0; i < state.carts[order].products.length; i++) {
        if (productId == state.carts[order].products[i].productId) {
          productIndex = i;
          break;
        }
      }
      state.carts[order].price -= price;
      state.carts[order].price += quantity * Number(oneProductPrice).toFixed(0);
      state.carts[order].products[productIndex].quantity = quantity;
    },
    deleteStoreCart: (state, { payload: { order } }) => {
      document.getElementById(`cart${order}`).remove();
      if (document.getElementById(`addToCartForm${order}`))
        document.getElementById(`addToCartForm${order}`).remove();
    },
    addItemToCart: (state, { payload: { quantity, productId, order } }) => {
      state.carts[order].products.push({
        productId: productId,
        quantity: quantity,
      });
    },
    addStorageNewCart: (state, { payload: { cart } }) => {
      state.carts.push({
        userId: cart.userId,
        price: 0,
        products: cart.products,
        id: cart.id,
        date: cart.date,
      });
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
  addStorageNewCart,
} = cartsSlice.actions;

export default cartsSlice;
