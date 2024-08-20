import { Button } from "../Common/Button";
import { Business } from "./Business";
import styles from "./BusinessItem.module.css";

interface BusinessItemProps {
  business: Business;
}

export const BusinessItem = ({ business }: BusinessItemProps) => {
  return (
    <div className={styles.item}>
      {business.imageUrls.length && (
        <img
          src={business.imageUrls[0]}
          alt={business.name}
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <Button>Book now</Button>
      </div>
    </div>
  );
};
