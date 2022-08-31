import { createSlice } from "@reduxjs/toolkit";

let adminCartsSlice = createSlice({
    name : 'adminCarts',
    initialState : {
        carts : []
    },
    reducers : {
        setCarts : (state, { payload : { carts }}) => {
            state.carts = carts;
        }
    }
});

export const { setCarts } = adminCartsSlice.actions;
export default adminCartsSlice;
