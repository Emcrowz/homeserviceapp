import { Categories } from "../Components/Category/Categories";
import { CategoryList } from "../Components/Category/CategoryList";
import { TopBar } from "../Components/Layout/TopBar";

import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div>
      <TopBar />
      <div className={styles.servicesContainer}>
        <Categories display="vertical" />
        <CategoryList />
      </div>
    </div>
  );
};
