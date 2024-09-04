import React from "react";
import { Business } from "./Business";
import styles from "./BusinessItemForDetails.module.css";
import defaultPicture from "../../Assets/defaultService.svg";
import { Link } from "react-router-dom";

interface BusinessItemForDetailsProps {
  business: Business;
}

export const BusinessItemForDetails: React.FC<BusinessItemForDetailsProps> = ({ business }) => {
  const imageUrl =
    Array.isArray(business.imageUrls) && business.imageUrls.length > 0 ? business.imageUrls[0] : defaultPicture;

  return (
    <Link className={styles.customBusinessItem} to={`/details/${business._id}`}>
      <img className={styles.businessPicture} src={imageUrl} alt={business.name} />
      <div className={styles.detailsContainer}>
        <h3 className={styles.businessName}>{business.name}</h3>
        <p className={styles.personName}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
      </div>
    </Link>
  );
};
