import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../Router/RouterConsts";

import { Button } from "../Components/Common/Button";
import styles from "./Login.module.css";
import { UserContext } from "../Components/Context/UserContext";
import { Form, Formik } from "formik";
import { LoginRequest, loginValidationSchema } from "../Components/User/User";
import { AxiosError } from "axios";
import { FormikField } from "../Components/Common/FormikField";
import { loginRequest } from "../Components/User/UserApi";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = async (formValues: LoginRequest) => {
    try {
      const res = await loginRequest(formValues);
      login(res);
      navigate(ROUTES.HOME);
    } catch (err) {
      const errorMessage = err as AxiosError<{ message: string }>;
      setError(errorMessage.response?.data.message ?? "");
    }
  };

  const loginInitialValues: LoginRequest = {
    email: "",
    password: "",
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={loginInitialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.field}>
            <FormikField name="email" type="email" placeholder="Email" />
          </div>

          <div className={styles.field}>
            <FormikField name="password" type="password" placeholder="Password" />
          </div>

          {/* <input
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
          /> */}
          <Button type="submit" styleType="small">
            Sign In
          </Button>
          <div className={styles.link}>
            <h3>Not a user?</h3>
            <Link to={ROUTES.REGISTER}>Register here</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
