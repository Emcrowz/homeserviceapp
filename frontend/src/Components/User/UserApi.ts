import { LoginRequest, LoginResponse, RegisterRequest } from "./User";
import { axiosInstance } from "../../Config/Axios";

export const loginRequest = async (user: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post(`/auth/login`, user);
  return await response.data;
};

export const registerUser = async (user: RegisterRequest): Promise<boolean> => {
  const response = await axiosInstance.post(`/auth/register`, user);
  return await response.data;
};
