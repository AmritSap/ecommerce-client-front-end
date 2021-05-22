import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: {},
  isAuthorised: false,
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
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { requestPending, loginSuccess, requestFail } = actions;

export default reducer;
