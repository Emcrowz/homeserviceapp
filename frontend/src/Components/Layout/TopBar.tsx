import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Common/Button";
import { Logo } from "./Logo";
import Navigation from "./Navigation";
import styles from "./TopBar.module.css";
import { ROUTES } from "../../Router/RouterConsts";
import { UserContext } from "../Context/UserContext";
import { UserDropdown } from "../Common/UserDropdown";

export const TopBar: React.FC = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className={styles.topbar}>
      <Logo />
      <Navigation />
      {user ? (
        <div className={styles.userSection}>
          <span className={styles.userName}>Hello, {user.name}</span>
          <UserDropdown />
        </div>
      ) : (
        <Button onClick={() => navigate(ROUTES.LOGIN)}>Login / Sign Up</Button>
      )}
    </div>
  );
};
