import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    initialState: {
      isFetching: false,
      error: false,
      user: [],
    },
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
      state.error = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.user.push(action.payload);
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  registerSlice.actions;

export default registerSlice.reducer;
