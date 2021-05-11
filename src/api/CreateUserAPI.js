import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const createUserApi = rootUrl + "create-account";

export const createUser = (newUserFormData) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(newUserFormData);
      const { data } = await axios.post(createUserApi, newUserFormData);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
