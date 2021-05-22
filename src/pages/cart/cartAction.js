import {
  requestPending,
  getCartSuccess,
  deleteFromCartSuccess,
  requestFail,
} from "./cartSlice";

export const addToCart = (listitem, selectedQty) => async (dispatch) => {
  try {
    const newItem = {
      ...listitem,
      selectedQty,
    };
    console.log("from action", newItem);
    dispatch(getCartSuccess(newItem));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};

export const deleteFromCart = (item) => async (dispatch) => {
  try {
    dispatch(deleteFromCartSuccess(item));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
