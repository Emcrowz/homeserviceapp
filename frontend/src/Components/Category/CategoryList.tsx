import React from "react";
import { CategoryItem } from "./CategoryItem";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "./CategoryApi";
import styles from "./CategoryList.module.css";
import classNames from "classnames";

interface CategoryListProps {
  layout?: "main" | "categories";
  className?: string;
}

const useCategories = () => {
  return useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: fetchCategories,
  });
};

export const CategoryList: React.FC<CategoryListProps> = ({ layout = "main", className }) => {
  const { data, isLoading, isError } = useCategories();
  const categories = data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading categories.</div>;

  return (
    <div
      className={classNames(
        styles.categoriesContainer,
        { [styles.categoriesLayout]: layout === "categories" },
        className,
      )}
    >
      {categories.map((category) => (
        <Link className={styles.link} to={`/services/${category.name.toLowerCase()}`} key={category.name}>
          <CategoryItem
            category={category}
            path={`/services/${category.name.toLowerCase()}`}
            layout={layout}
            className={layout === "categories" ? styles.categoryItemServices : styles.categoryItem}
          />
        </Link>
      ))}
    </div>
  );
};
