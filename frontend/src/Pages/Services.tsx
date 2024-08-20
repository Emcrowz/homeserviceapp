import { BusinessList } from "../Components/Business/BusinessList";
import { CategoryList } from "../Components/Category/CategoryList";

import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div>
      <div className={styles.servicesContainer}>
        <CategoryList display="vertical" />
        <BusinessList />
      </div>
    </div>
  );
};
