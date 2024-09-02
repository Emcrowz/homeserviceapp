import { useParams } from "react-router-dom";
import { BusinessList } from "../Components/Business/BusinessList";
import { CategoryList } from "../Components/Category/CategoryList";
import styles from "./Services.module.css";

export const ServicesFiltered = () => {
  const { category } = useParams();

  return (
    <div className={styles.filteredServicesPageContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.categoriesWrapper}>
          <CategoryList layout="categories" />
        </div>
        <div className={styles.businessesWrapper}>
          <BusinessList categoryName={category} customClassName={styles.bussinessListInServicePageContainer} />
        </div>
      </div>
    </div>
  );
};
