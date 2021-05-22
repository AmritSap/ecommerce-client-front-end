import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const categoryAPIurl = rootUrl + "category";

export const categoryAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(categoryAPIurl);
      console.log("from category api ", data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
export const getAProductAPI = (_id) => {
  console.log("from productaapi ", _id);
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(categoryAPIurl + "/" + _id);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
