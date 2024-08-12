import { Categories } from "../Components/Category/Categories";
import { Search } from "../Components/Common/Search";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <h2 className={styles.title}>Find Home Service/Repair Near You</h2>
        <span className={styles.subtitle}>
          Explore Best Home Services & Repair near you
        </span>
      </div>
      <Search />
      <Categories display="horizontal" />
    </div>
  );
};
