import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrent } = offerSlice.actions;

export default offerSlice.reducer;
