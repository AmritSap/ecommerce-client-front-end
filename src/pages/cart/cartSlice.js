import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    getCartSuccess: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      // const { payload, selectedQty } = payload;
      // console.log("from slice", payload, selectedQty);

      const existItem = state.cartList?.find(
        (item) => item._id === payload._id
      );

      if (existItem) {
        state.cartList = state.cartList?.map((row) =>
          row._id === existItem._id ? payload : row
        );
      } else {
        state.cartList.push(payload);

        // state.cartList.forEach((list) => {
        //   list.userSelectedQuantity = selectedQty;
        // });
      }
    },
    deleteFromCartSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.cartList = state.cartList.filter(
        (Item) => Item._id !== payload._id
      );
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  requestPending,
  getCartSuccess,
  deleteFromCartSuccess,
  requestFail,
} = actions;

export default reducer;
