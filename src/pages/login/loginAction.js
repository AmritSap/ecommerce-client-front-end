import {
  requestPending,
  loginSuccess,
  requestFail,
  logoutSuccess,
  updateLogin,
  userProfile,
} from "./loginSlice";
import { loginAPI } from "../../api/loginAPI";
import { logoutAPI } from "../../api/logoutAPI";
import { tokenAPI } from "../../api/tokenAPI";
import { getUserAPI } from "../../api/tokenAPI";
import { useHistory } from "react-router-dom";

export const loginAction = (loginFormData) => async (dispatch) => {
  try {
    console.log(loginFormData);
    dispatch(requestPending());
    const result = await loginAPI(loginFormData);

    console.log("from login action", result);
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

export const logout = (_id) => (dispatch) => {
  // clear browser storage
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("EcommerceRefreshJWT");
  dispatch(logoutSuccess());
  logoutAPI(_id);

  // and also remove tokens from our server
};

export const userAutoLogin = () => async (dispatch) => {
  console.log("from userAuto login");
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("EcommerceRefreshJWT");

  accessJWT && dispatch(updateLogin());

  if (!refreshJWT) {
    dispatch(logoutSuccess());
  }

  if (!accessJWT && refreshJWT) {
    //call the server to get new access token
    const result = await tokenAPI(refreshJWT);
    console.log(result);

    if (result.status === "success") {
      sessionStorage.setItem("accessJWT", result.accessJwt);
      dispatch(updateLogin());
    }
  }

  const userDetails = await getUserAPI(refreshJWT);
  userDetails._id && dispatch(userProfile(userDetails));
};
