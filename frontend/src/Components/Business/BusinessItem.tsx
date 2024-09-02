import { Link } from "react-router-dom";
import { Button } from "../Common/Button";
import { Business } from "./Business";
import styles from "./BusinessItem.module.css";
import defaultPicture from "../../Assets/defaultService.svg";

interface BusinessItemProps {
  business: Business;
}

export const BusinessItem = ({ business }: BusinessItemProps) => {
  const imageUrl =
    Array.isArray(business.imageUrls) && business.imageUrls.length > 0 ? business.imageUrls[0] : defaultPicture;

  return (
    <Link to={`/details/${business._id}`} className={styles.linkContainer}>
      <div className={styles.card}>
        <img src={imageUrl} alt={business.name} className={styles.image} />
        <div className={styles.infoContainer}>
          <span className={styles.chip}>{business.category}</span>
          <h3 className={styles.name}>{business.name}</h3>
          <p className={styles.contactPerson}>{business.contactPerson}</p>
          <p className={styles.address}>{business.address}</p>
          <Button className={styles.bookButton}>Book now</Button>
        </div>
      </div>
    </Link>
  );
};
