import { PropsWithChildren } from "react";
import styles from "./Avatar.module.css";

export const Avatar = ({ children }: PropsWithChildren) => {
  return <div className={styles.avatar}>{children}</div>;
};
