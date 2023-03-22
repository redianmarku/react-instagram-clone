import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    successLoad: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loginUser, logoutUserm, successLoad } = userSlice.actions;
