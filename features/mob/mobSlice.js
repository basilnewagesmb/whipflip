import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 0,
};
const mobSlice = createSlice({
  name: "mob",
  initialState,
  reducers: {
    setCurrentSlide: (state, action) => {
      state.currentSlide = action.payload;
    },
  },
});

export const { setCurrentSlide } = mobSlice.actions;

export default mobSlice.reducer;
