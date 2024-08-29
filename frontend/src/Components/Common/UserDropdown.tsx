import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./UserDropdown.module.css";
import { ROUTES } from "../../Router/RouterConsts";
import { UserContext } from "../Context/UserContext";
import { Avatar } from "../Common/Avatar";

export const UserDropdown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(UserContext);

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
    <div className={styles.avatarDropdownContainer} ref={dropdownRef}>
      <div onClick={handleAvatarClick}>{user && <Avatar user={user} />}</div>
      {isDropdownOpen && (
        <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
          <b className={styles.myAccount}>My Account</b>
          <div className={styles.dropdownOptions}>
            <button className={styles.dropdownItem} onClick={handleMyOrders}>
              My Orders
            </button>
            <button className={styles.dropdownItem} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
