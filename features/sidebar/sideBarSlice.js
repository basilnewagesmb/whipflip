import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSideBar: false,
};
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpenSideBarReducer: (state, action) => {
      state.openSideBar = action.payload;
    },
  },
});

export const { setOpenSideBarReducer } = sidebarSlice.actions;

export default sidebarSlice.reducer;
