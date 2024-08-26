import { useNavigate } from "react-router-dom";
import { Button } from "../Common/Button";
import { Logo } from "./Logo";
import Navigation from "./Navigation";
import styles from "./TopBar.module.css";
import { ROUTES } from "../../Router/RouterConsts";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Avatar } from "../Common/Avatar";

export const TopBar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className={styles.topbar}>
      <Logo />
      <Navigation />
      {user ? <Avatar>{user.name[0]}</Avatar> : <Button onClick={() => navigate(ROUTES.LOGIN)}>Login / Sign Up</Button>}
    </div>
  );
};
