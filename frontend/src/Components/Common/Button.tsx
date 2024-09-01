import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: string;
  className?: string;
}

export const Button = ({ children, onClick, styleType, type, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${className} ${styleType ? styles[styleType] : ""}`}
    >
      {children}
    </button>
  );
};
