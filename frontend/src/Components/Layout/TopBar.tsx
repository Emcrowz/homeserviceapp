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
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className={styles.topbar}>
      <Logo />
      <Navigation />
      {user ? (
        <div style={{ display: "flex", gap: "1em" }}>
          <p>Hello, {user.name}</p>
          <Avatar>{user.name[0]}</Avatar>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button onClick={() => navigate(ROUTES.LOGIN)}>Login / Sign Up</Button>
      )}
    </div>
  );
};
