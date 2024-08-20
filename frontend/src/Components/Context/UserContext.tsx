import { PropsWithChildren, createContext, useState } from "react";
import { LoginResponse, User } from "../User/User";

export const UserContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (user: LoginResponse) => void;
  logout: () => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [, setToken] = useState<string | null>(null);

  const isLoggedIn = !!user;

  const login = (loginResponse: LoginResponse) => {
    setUser(loginResponse.user);
    setToken(loginResponse.token);
  };

  const logout = (): void => {
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
