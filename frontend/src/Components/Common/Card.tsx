import { Business } from "../Business/Business";
import styles from "./Card.module.css";

interface CardProps {
  styleType?: string;
  cardDataType?: string;
}

export const Card = ({ styleType, cardDataType }: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[`${styleType}`]}`}>
      <UrlIcon />
    </div>
  );
};
