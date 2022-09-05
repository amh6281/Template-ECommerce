import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentShop: null,
  loading: false,
  error: false,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentShop = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = shopSlice.actions;

export default shopSlice.reducer;
