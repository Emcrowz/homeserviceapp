import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Router/RouterConsts";

import { Button } from "../Components/Common/Button";
import styles from "./Login.module.css";
import { loginRequest } from "../Components/User/UserApi";
import { UserContext } from "../Components/Context/UserContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = "";
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await loginRequest({ email, password });
    login(res);
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <Button type="submit" styleType="small">
          Sign In
        </Button>
        <div className={styles.link}>
          <h3>Not a user?</h3>
          <a onClick={() => navigate(ROUTES.REGISTER)}>Register here</a>
        </div>
      </form>
    </div>
  );
};
