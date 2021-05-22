import { requestPending, loginSuccess, requestFail } from "./loginSlice";
import { loginAPI } from "../../api/loginAPI";

export const loginAction = (loginFormData) => async (dispatch) => {
  try {
    console.log(loginFormData);
    dispatch(requestPending());
    const result = await loginAPI(loginFormData);
    //in result wwe get  status, message,accessJWT,refreshJWT and we destructure and only use accessJWT and refreshJWT

    const { accessJWT, refreshJWT } = result;

    // store the accesstoken and refresh token in browser storage
    accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
    refreshJWT && localStorage.setItem("EcommerceRefreshJWT", refreshJWT);

    dispatch(loginSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
