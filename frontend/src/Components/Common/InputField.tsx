import styles from "./InputField.module.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputField = ({ className, ...props }: InputFieldProps) => {
  return <input className={styles[`${className}`]} {...props} />;
};
