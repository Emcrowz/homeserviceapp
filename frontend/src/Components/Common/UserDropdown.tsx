import React from "react";
import styles from "./UserDropdown.module.css";

interface UserDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMyOrders: () => void;
  onLogout: () => void;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen, onMyOrders, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
      <b className={styles.myAccount}>My Account</b>
      <div className={styles.dropdownOptions}>
        <button className={styles.dropdownItem} onClick={onMyOrders}>
          My Orders
        </button>
        <button className={styles.dropdownItem} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
