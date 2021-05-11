import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  createUserresponse: {},
};

const createUserSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    createUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.createUserresponse = payload;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.createUserresponse = payload;
    },
  },
});

const { reducer, actions } = createUserSlice;
export const { requestPending, createUserSuccess, requestFail } = actions;

export default reducer;
