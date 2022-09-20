import { configureStore } from "@reduxjs/toolkit";
import adminCartsSlice from "./features/admin/cartsSlice";
import adminProductsSlice from "./features/admin/productsSlice";
import adminUsersSlice from "./features/admin/usersSlice";
import authSlice from "./features/auth/authSlice";
import cartsSilce from "./features/carts/cartsSilce";
import darkModeSlice from "./features/darkMode/darkModeSlice";
import leftToRight from "./features/leftToRight/leftToRight";
import productsSlice from "./features/products/productsSlice";

let store = configureStore({
  reducer: {
    carts: cartsSilce.reducer,
    products: productsSlice.reducer,
    auth: authSlice.reducer,
    leftToRight: leftToRight.reducer,
    darkMode: darkModeSlice.reducer,
    adminCarts: adminCartsSlice.reducer,
    adminUsers: adminUsersSlice.reducer,
    adminProducts: adminProductsSlice.reducer,
  },
});

export default store;
