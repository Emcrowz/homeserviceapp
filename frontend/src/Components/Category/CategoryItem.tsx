import styles from "./CategoryItem.module.css";
import { Button } from "../Common/Button";

import { Solution } from "./Solution";

interface CategoryItemProps {
  solution: Solution;
}

export const CategoryItem = ({ solution }: CategoryItemProps) => {
  return (
    <div className={styles.categoryItem}>
      {solution.imageUrls.length > 0 && (
        <img
          src={solution.imageUrls[0]}
          alt={solution.name}
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{solution.category}</span>
        <h3 className={styles.name}>{solution.name}</h3>
        <p className={styles.contactPerson}>{solution.contactPerson}</p>
        <p className={styles.address}>{solution.address}</p>
        <Button>Book now</Button>
      </div>
    </div>
  );
};
