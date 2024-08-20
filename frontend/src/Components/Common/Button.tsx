import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: string;
}

export const Button = ({ children, onClick, styleType }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[`${styleType}`]}`}
    >
      {children}
    </button>
  );
};
