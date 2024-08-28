import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: string;
}

export const Button = ({ children, onClick, styleType, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`${styles.button} ${styles[`${styleType}`]}`}>
      {children}
    </button>
  );
};
