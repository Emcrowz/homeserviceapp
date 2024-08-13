import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...props }: ButtonProps) => {
  return <button className={styles.custBtn}>{props.children}</button>;
};
