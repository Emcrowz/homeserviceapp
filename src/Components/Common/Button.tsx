import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rouded?: boolean;
  small?: boolean;
  large?: boolean;
}

export const Button = ({ ...props }: ButtonProps) => {
  return <button>Button</button>;
};
