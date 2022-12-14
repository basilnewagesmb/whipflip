import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 5,
  avatars: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.count = action.payload.count;
      state.avatars = action.payload.avatars;
    },
  },
});

export const { setReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;
