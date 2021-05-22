import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const productAPIurl = rootUrl + "cart";

export const cartAPI = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(productAPIurl, _id);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
