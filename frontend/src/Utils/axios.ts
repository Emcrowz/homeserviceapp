import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const baseUrl = import.meta.env.PROD ? "PROD_LINK" : "http://localhost:3000";

const config: AxiosRequestConfig {
    baseUrl,
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
    }
)