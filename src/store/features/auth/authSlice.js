import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : { isLoggedIn : localStorage.getItem("token") ? true : false },
    reducers : {
        login(state, action) {
            localStorage.setItem("token", action.payload);
            state.isLoggedIn = true;
        },
        logout (state) {
            state.isLoggedIn = false;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice;

