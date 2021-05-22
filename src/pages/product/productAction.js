import {
  requestPending,
  getProductSuccess,
  selectedProductSucess,
  requestFail,
  selectedProductBySlugSucess,
} from "./productSlice";
import { getAProductAPIBySlugValue, productAPI } from "../../api/productAPI";
import { categoryAPI, getAProductAPI } from "../../api/categoryAPI";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await productAPI(); //{status, message, result:[]}
    dispatch(getProductSuccess(result));
  } catch (error) {
    console.log(error);
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};

export const fetchSelectedProducts = (_id) => async (dispatch) => {
  console.log("fetch selected products", _id);
  try {
    dispatch(requestPending());

    const result = await getAProductAPI(_id); //{status, message, result:[]}
    console.log("result from server", result);
    dispatch(selectedProductSucess(result));
  } catch (error) {
    console.log(error);
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};

export const fetchGivenSlugProduct = (slugValue) => async (dispatch) => {
  console.log("fetch selected products", slugValue);
  try {
    dispatch(requestPending());

    const result = await getAProductAPIBySlugValue(slugValue); //{status, message, result:[]}
    console.log("result from server", result);
    dispatch(selectedProductBySlugSucess(result));
  } catch (error) {
    console.log(error);
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
