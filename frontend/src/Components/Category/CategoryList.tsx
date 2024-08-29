import { Category } from "./Category";
import { CategoryItem } from "./CategoryItem";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "./CategoryApi";
import styles from "./CategoryList.module.css";

interface CategoryListProps {
  display?: string;
  categoryName?: Category["name"];
}

const useCategories = () => {
  return useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: fetchCategories,
  });
};
export const CategoryList = ({ display }: CategoryListProps) => {
  const { data } = useCategories();
  const categories = data ?? [];

  return (
    <div
      className={`${styles.categoryContainer} ${
        display === "vertical"
          ? styles.categoriesVertical
          : display === "horizontal"
            ? styles.categoriesHorizontal
            : styles.categoriesNone
      }`}
    >
      {categories.map((category) => (
        <Link to={`/services/${category.name.toLowerCase()}`} key={category.name}>
          <CategoryItem category={category} path={`/service/${category.name.toLowerCase()}`} />
        </Link>
      ))}
    </div>
  );
};
