import {
  requestPending,
  createUserSuccess,
  requestFail,
} from "./createAccountSlice";

import { createUser } from "../../api/CreateUserAPI";

export const newUserAction = (formData) => async (dispatch) => {
  try {
    ///////calls the action creater for requestPending////////
    dispatch(requestPending());
    const result = await createUser(formData);
    console.log("from ACTION", result);
    dispatch(createUserSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail());
    console.log(error);
  }
};
