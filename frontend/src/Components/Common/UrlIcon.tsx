import { CSSProperties } from "react";
import styles from "./UrlIcon.module.css";

interface UrlIconProps {
  url: string;
  style?: CSSProperties;
  icon?: string;
}

export const UrlIcon = ({ url, icon, style = {} }: UrlIconProps) => {
  return (
    <div
      className={`${styles.urlIcon} ${styles[`${icon}`]}`}
      style={{
        maskImage: `url(${url})`,
        WebkitMaskImage: `url(${url})`,
        ...style,
      }}
    ></div>
  );
};
