import { Login } from "../Common/Login";
import { Logo } from "./Logo";
import Navigation from "./Navigation";
import styles from "./TopBar.module.css";

export const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <Logo />
      <Navigation />
      <Login />
    </div>
  );
};
