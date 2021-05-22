import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const productAPIurl = rootUrl + "product";

export const productAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(productAPIurl);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getAProductAPIBySlugValue = (slugValue) => {
  console.log("from productaapi ", slugValue);
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(productAPIurl + "/" + slugValue);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
