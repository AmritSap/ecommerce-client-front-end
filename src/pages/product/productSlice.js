import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productList: [],
  selectedProductList: [],
  addToCart: [],
  selectedProductBySlugList:[]
};

const getProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    getProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.productList = payload.result;
    },
    selectedProductSucess: (state, { payload }) => {
      console.log("from slice", payload.result);
      state.isLoading = false;
      state.selectedProductList = payload.result;
    },
    selectedProductBySlugSucess: (state, { payload }) => {
      console.log("from slice", payload.result);
      state.isLoading = false;
      state.selectedProductBySlugList = payload.result;
    },
    addToCartSuccess: (state, { payload }) => {
      console.log("from slice", payload);
      state.isLoading = false;
      state.selectedProductList = payload;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = getProductSlice;
export const {
  requestPending,
  getProductSuccess,
  selectedProductSucess,
  requestFail,
  addToCartSuccess,
  selectedProductBySlugSucess,
} = actions;

export default reducer;
