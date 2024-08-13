import { Categories } from "../Components/Category/Categories";
import { CategoryList } from "../Components/Category/CategoryList";

import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div>
      <div className={styles.servicesContainer}>
        <Categories display="vertical" />
        <CategoryList />
      </div>
    </div>
  );
};
