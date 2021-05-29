import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  reviewsList: [],
};

const getReviewsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    addReviewSuccess: (state, { payload }) => {
      console.log("false");
      state.isLoading = false;
      console.log(state.isLoading);
      state.reviewsList = payload;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = getReviewsSlice;
export const {
  requestPending,

  addReviewSuccess,

  requestFail,
} = actions;

export default reducer;
