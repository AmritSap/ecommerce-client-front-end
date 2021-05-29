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
      selectedQty
    };
    
    dispatch(getCartSuccess(newItem));
    localStorage.setItem("cart", JSON.stringify(newItem));
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
    localStorage.removeItem("cart", JSON.stringify(item));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
