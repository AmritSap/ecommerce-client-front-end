import { requestPending, addReviewSuccess, requestFail } from "./reviewsSlice";
import { reviewsAPI } from "../../api/reviewsAPI";

export const addReviewsAction = (reviews) => async (dispatch) => {
  try {
    console.log("from action", reviews);
    dispatch(requestPending());

    const result = await reviewsAPI(reviews); //{status, message, result:[]}
    console.log("from action", result);
    result.status === "success" && dispatch(addReviewSuccess(result));
  } catch (error) {
    console.log(error);
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
