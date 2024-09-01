import React from "react";
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

export const CategoryList: React.FC<CategoryListProps> = ({ display }) => {
  const { data, isLoading, isError } = useCategories();
  const categories = data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading categories.</div>;

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
        <Link className={styles.link} to={`/services/${category.name.toLowerCase()}`} key={category.name}>
          <CategoryItem category={category} path={`/services/${category.name.toLowerCase()}`} />
        </Link>
      ))}
    </div>
  );
};
