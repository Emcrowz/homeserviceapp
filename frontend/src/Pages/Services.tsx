import { BusinessList } from "../Components/Business/BusinessList";
import { CategoryList } from "../Components/Category/CategoryList";
import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div className={styles.filteredServicesPageContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.categoriesWrapper}>
          <CategoryList layout="categories" />
        </div>
        <BusinessList
          layoutStyle="five-per-row"
          customClassName={styles.businessListInServicesPage}
          isServicesPage={true}
        />
      </div>
    </div>
  );
};
