import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const loginAPIurl = rootUrl + "login";

export const loginAPI = (loginFormData) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(loginFormData);
      const { data } = await axios.post(loginAPIurl, loginFormData);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

