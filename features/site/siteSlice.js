import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    initialize: (state, action) => {
      state.referrerUrl = document.referrer;
      state.documentUrl = document.URL;
      state.gaClickId = action.payload.gclid || null;
      state.gaClientId = ga?.getAll()[0].get("clientId") || null;
    },
  },
});

export const { initialize } = siteSlice.actions;

export default siteSlice.reducer;
