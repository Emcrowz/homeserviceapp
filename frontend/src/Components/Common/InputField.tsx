import styles from "./InputField.module.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const InputField = ({ className, ...props }: InputFieldProps) => {
  return <input className={`${styles.inputField} ${className || ""}`.trim()} {...props} />;
};
