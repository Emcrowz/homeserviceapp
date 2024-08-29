import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../Common/Button";
import { Logo } from "./Logo";
import Navigation from "./Navigation";
import styles from "./TopBar.module.css";
import { ROUTES } from "../../Router/RouterConsts";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../Context/UserContext";
import { Avatar } from "../Common/Avatar";
import { UserDropdown } from "../Common/UserDropdown";

export const TopBar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleAvatarClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  const handleMyOrders = () => {
    navigate(ROUTES.MY_ORDERS);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <div className={styles.topbar}>
      <Logo />
      <Navigation />
      {user ? (
        <div className={styles.userSection}>
          <span className={styles.userName}>Hello, {user.name}</span>
          <div className={styles.avatarDropdownContainer} ref={dropdownRef}>
            <Avatar user={user} onClick={handleAvatarClick} />
            <UserDropdown
              isOpen={isDropdownOpen}
              onClose={() => setIsDropdownOpen(false)}
              onMyOrders={handleMyOrders}
              onLogout={handleLogout}
            />
          </div>
        </div>
      ) : (
        <Button onClick={() => navigate(ROUTES.LOGIN)}>Login / Sign Up</Button>
      )}
    </div>
  );
};
