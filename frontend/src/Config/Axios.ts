import axios, { AxiosError, AxiosRequestConfig } from "axios";

const baseURL = "http://localhost:3005";

const config: AxiosRequestConfig = {
  baseURL,
};

export const axiosInstance = axios.create(config);

export default axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      const parsedToken = JSON.parse(token);
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
