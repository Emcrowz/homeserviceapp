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

export interface RegisterRequest extends LoginRequest {
  name: string;
}
