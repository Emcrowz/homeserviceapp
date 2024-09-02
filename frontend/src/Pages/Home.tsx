import { BusinessList } from "../Components/Business/BusinessList";
import { CategoryList } from "../Components/Category/CategoryList";
import { Search } from "../Components/Common/Search";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <h2 className={styles.title}>
          Find Home <span className={styles.highlightedText}>Service/Repair</span> <br /> Near You
        </h2>
        <span className={styles.subtitle}>Explore Best Home Services & Repair near you</span>
      </div>
      <Search />
      <CategoryList display="horizontal" context="default" />
      <BusinessList showFeatured={true} />
    </div>
  );
};
