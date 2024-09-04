import { ChangeRequest, LoginRequest, LoginResponse, RegisterRequest } from "./User";
import axiosInstance from "../../Config/Axios";

export const loginRequest = async (user: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post(`/auth/login`, user);

  return response.data;
};

export const registerUser = async (user: RegisterRequest): Promise<boolean> => {
  const response = await axiosInstance.post(`/auth/register`, user);
  return response.data;
};

export const changeUserDetails = async (user: ChangeRequest): Promise<boolean> => {
  const response = await axiosInstance.post(`/auth/changeDetails`, user);
  return response.data;
};
