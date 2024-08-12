import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Router/RouterConsts";

import { Button } from "../Components/Common/Button";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => e.target.value}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => e.target.value}
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};
