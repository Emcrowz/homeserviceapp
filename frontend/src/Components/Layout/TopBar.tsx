import { useNavigate } from "react-router-dom";
import { Button } from "../Common/Button";
import { Logo } from "./Logo";
import Navigation from "./Navigation";
import styles from "./TopBar.module.css";
import { ROUTES } from "../../Router/RouterConsts";

export const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.topbar}>
      <Logo />
      <Navigation />
      <Button onClick={() => navigate(ROUTES.LOGIN)}>Login / Sign Up</Button>
    </div>
  );
};
