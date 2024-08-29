import React from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  user: { name: string };
  onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({ user, onClick }) => {
  const initials = user.name
    .split(" ")
    .map((namePart) => namePart[0])
    .join("")
    .toUpperCase();

  return (
    <div className={styles.avatar} onClick={onClick}>
      {initials}
    </div>
  );
};
