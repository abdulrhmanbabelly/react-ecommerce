import { createSlice } from "@reduxjs/toolkit";

let darkModeSlice = createSlice({
    name : "darkMode",
    initialState : {
        on : localStorage.getItem("darkMode") == "true"
    },
    reducers : {
        toggleDarkMode : (state) => {
            state.on = state.on ? false : true;
        }
    }
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice;

