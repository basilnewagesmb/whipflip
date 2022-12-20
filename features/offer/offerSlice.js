import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setInitialOffer: (state, action) => {
      state.current = 1;
      state.initialOffer = action.payload;
    },
    reset: (state, action) => {
      state.current = 0;
      state.initialOffer = null;
    },
  },
});

export const { setCurrent, setInitialOffer, reset } = offerSlice.actions;

export default offerSlice.reducer;
