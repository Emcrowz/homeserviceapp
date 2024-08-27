import { ErrorMessage, Field } from "formik";
import { InputField } from "./InputField";
import styles from "./InputField.module.css";

interface FormikFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const FormikField = ({ name, ...props }: FormikFieldProps) => {
  return (
    <div>
      <Field name={name} as={InputField} {...props} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};
