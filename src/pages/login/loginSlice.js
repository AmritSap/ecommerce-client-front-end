import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: {},
  isAuthorised: false,
  user: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    loginSuccess: (state, { payload }) => {
      state.isLoading = false;

      state.loginResponse = payload;
      state.isAuthorised = true;
    },
    logoutSuccess: (state, { payload }) => {
      state.isLoading = false;

      state.isAuthorised = false;
    },
    userProfile: (state, { payload }) => {
      state.isLoading = false;

      state.user = payload;
    },
    updateLogin: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised = true;
      state.loginResponse = payload || {};
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export const {
  requestPending,
  loginSuccess,
  logoutSuccess,
  updateLogin,
  requestFail,
  userProfile,
} = actions;

export default reducer;
