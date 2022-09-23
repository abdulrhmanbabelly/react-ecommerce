import { createSlice } from "@reduxjs/toolkit";

let leftToRight = createSlice({
  name: "leftToRight",
  initialState: {
    ltr: true,
  },
  reducers: {
    setLeftToRight: (state, { payload: { ltr } }) => {
      state.ltr = ltr;
    },
    toggleLeftToRight: (state) => {
      state.ltr = state.ltr ? false : true;
    },
  },
});

export const { toggleLeftToRight, setLeftToRight } = leftToRight.actions;

export default leftToRight;
