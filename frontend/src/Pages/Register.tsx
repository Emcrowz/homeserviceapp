import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Components/Context/UserContext";
import { loginRequest, registerUser } from "../Components/User/UserApi";
import { ROUTES } from "../Router/RouterConsts";
import { Button } from "../Components/Common/Button";
import styles from "./Register.module.css";
import { RegisterRequest } from "../Components/User/User";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = "";
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: RegisterRequest = {
      name: name,
      email: email,
      password: password,
    };

    const resRegistration = await registerUser(newUser);

    if (resRegistration) {
      const resLogin = await loginRequest({ email, password });

      login(resLogin);
      navigate(ROUTES.HOME);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Registration Form</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
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
          Register
        </Button>
        <div className={styles.link}></div>
      </form>
    </div>
  );
};
