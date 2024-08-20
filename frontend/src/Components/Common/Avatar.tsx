import { PropsWithChildren } from "react";
import styles from "./Avatar.module.scss";

export const Avatar = ({ children }: PropsWithChildren) => {
  return <div className={styles.avatar}>{children}</div>;
};
