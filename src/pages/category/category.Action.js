import {
  requestPending,
  getCategorySuccess,
  requestFail,
} from "./category.Slice";
import { categoryAPI } from "../../api/categoryAPI";

export const fetchCategory = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await categoryAPI(); //{status, message, result:[]}
    dispatch(getCategorySuccess(result));
  } catch (error) {
    console.log(error);
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
