import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const reviewsAPIurl = rootUrl + "reviews";

export const reviewsAPI = (reviewsData) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("from api ", reviewsData);
      const { data } = await axios.post(reviewsAPIurl, { reviewsData });
      console.log("from ape", data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
