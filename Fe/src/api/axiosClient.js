import axios from "axios";
import { env } from "../config/env";
import queryString from "query-string";
// import { getToken } from "src/util/Utils";

const axiosClient = axios.create({
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${
      localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : ""
    }`,
    withCredentials: false,
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.defaults.baseURL = env.REACT_APP_API;

// axiosClient.interceptors.request.use(async (config) => {
//   const accessToken = localStorage.getItem("token")
//     ? localStorage.getItem("token")
//     : "";
//   if (accessToken) {
//     config.headers.common.Authorization = `Bearer ${JSON.parse(accessToken)}`;
//   }
//   return config;
// });

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
