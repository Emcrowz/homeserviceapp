import { useContext, useState } from "react";
import { UserContext } from "../Components/Context/UserContext";
import { Button } from "../Components/Common/Button";
import styles from "./UserManagement.module.css";
import { Form, Formik } from "formik";
import { FormikField } from "../Components/Common/FormikField";
import { changeDetailsValidationSchema, ChangeRequest } from "../Components/User/User";
import { changeUserDetails } from "../Components/User/UserApi";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Router/RouterConsts";
import { AxiosError } from "axios";
import { ErrorPage } from "./ErrorPage";

export const UserManagement = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user } = useContext(UserContext);

  const handleSubmit = async (formValues: ChangeRequest) => {
    try {
      const resChangeDetails = await changeUserDetails(formValues);

      if (resChangeDetails) {
        navigate(ROUTES.HOME);
      }
    } catch (err) {
      const errorMessage = err as AxiosError<{ message: string }>;
      setError(errorMessage.response?.data.message ?? "");
    }
  };

  const changeUserDetailsValues: ChangeRequest = {
    _id: user?._id,
    name: user?.name,
    email: user?.email,
  };

  return user !== null ? (
    <Formik
      initialValues={changeUserDetailsValues}
      validationSchema={changeDetailsValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.userManagementContainer}>
        <h2>
          User <strong>{user?._id}</strong> details
        </h2>
        {error && <p className={styles.error}>{error}</p>}
        <div>
          <FormikField name="name" placeholder={user?.name} />
        </div>
        <div>
          <FormikField name="email" type="email" placeholder={user?.email} />
        </div>
        <Button type="submit">Change details</Button>
      </Form>
    </Formik>
  ) : (
    <ErrorPage />
  );
};
