import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Components/Context/UserContext";
import { loginRequest, registerUser } from "../Components/User/UserApi";
import { ROUTES } from "../Router/RouterConsts";
import { Button } from "../Components/Common/Button";
import styles from "./Register.module.css";
import { RegisterRequest, registerValidationSchema } from "../Components/User/User";
import { Formik, Form } from "formik";
import { FormikField } from "../Components/Common/FormikField";
import { AxiosError } from "axios";

export const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const handleSubmit = async (formValues: RegisterRequest) => {
    try {
      const resRegistration = await registerUser(formValues);

      if (resRegistration) {
        const { email, password } = formValues;
        const resLogin = await loginRequest({ email, password });

        login(resLogin);
        navigate(ROUTES.HOME);
      }
    } catch (err) {
      const errorMessage = err as AxiosError<{ message: string }>;
      setError(errorMessage.response?.data.message ?? "");
    }
  };

  const registerInitialValues: RegisterRequest = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={registerInitialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <h2 className={styles.title}>Registration Form</h2>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.field}>
            <FormikField name="name" placeholder="Name" />
          </div>
          <div className={styles.field}>
            <FormikField name="email" type="email" placeholder="Email" />
          </div>
          <div className={styles.field}>
            <FormikField name="password" type="password" placeholder="Password" />
          </div>
          <Button type="submit" styleType="small">
            Register
          </Button>
          <div className={styles.link}>
            <h3>Already a user?</h3>
            <Link to={ROUTES.LOGIN}>Login here</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
