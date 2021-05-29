import React from "react";
import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const logOutEndPoint = rootUrl + "logout";

export const logoutAPI = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(logOutEndPoint, { _id });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
