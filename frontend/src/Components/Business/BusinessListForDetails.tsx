import React from "react";
import { Business } from "./Business";
import { BusinessItemForDetails } from "./BusinessItemForDetails";
import styles from "./BusinessListForDetails.module.css";

interface BusinessListForDetailsProps {
  businesses: Business[];
}

export const BusinessListForDetails: React.FC<BusinessListForDetailsProps> = ({ businesses }) => {
  return (
    <div className={styles.container}>
      {businesses.map((business) => (
        <BusinessItemForDetails key={business._id} business={business} />
      ))}
    </div>
  );
};
