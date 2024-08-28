import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import * as Yup from "yup";
import { loginUser, registerUser } from "./UserApi";
import { ErrorResponse } from "react-router-dom";

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  token: string;
  user: User;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface ErrorMessage {
  required: string;
  email: string;
}

const errorMessage: ErrorMessage = {
  required: "Field is required.",
  email: "Email should be valid.",
};

export const loginValidationSchema: Yup.Schema<LoginRequest> = Yup.object().shape({
  email: Yup.string().email(errorMessage.email).required(errorMessage.required),
  password: Yup.string().required(errorMessage.required),
});

export const registerValidationSchema: Yup.Schema<RegisterRequest> = Yup.object().shape({
  name: Yup.string().required(errorMessage.required),
  email: Yup.string().email(errorMessage.email).required(errorMessage.required),
  password: Yup.string().required(errorMessage.required),
});

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["USERS"] }),
  });
};

export const useRegisterUser = (): UseMutationResult<boolean, ErrorResponse, RegisterRequest, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["USERS"] }),
  });
};
