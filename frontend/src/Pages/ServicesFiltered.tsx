import { useParams } from "react-router-dom";
import { BusinessList } from "../Components/Business/BusinessList";
import { CategoryList } from "../Components/Category/CategoryList";

import styles from "./Services.module.css";

export const ServicesFiltered = () => {
  const { category } = useParams();
  return (
    <div>
      <div className={styles.servicesContainer}>
        <CategoryList display="vertical" />
        <BusinessList categoryName={category} />
      </div>
    </div>
  );
};
