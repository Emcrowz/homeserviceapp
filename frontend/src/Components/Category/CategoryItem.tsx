import styles from "./CategoryItem.module.css";
import { Category } from "./Category";
import { useNavigate } from "react-router-dom";

interface CategoryItemProps {
  category: Category;
  path: string;
}

export const CategoryItem = ({ category, path }: CategoryItemProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.categoryItem}>
      {/* {category.url.length > 0 && (
        <img src={category.url} alt={category.name} className={styles.image} />
      )} */}
      <div className={styles.infoContainer} onClick={() => navigate(path)}>
        <h3 className={styles.name}>{category.name}</h3>
      </div>
    </div>
  );
};
