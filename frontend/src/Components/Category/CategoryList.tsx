import { useState, useEffect } from "react";
import styles from "./CategoryList.module.css";

import { Category } from "./Category";
import { CategoryItem } from "./CategoryItem";
import { Link } from "react-router-dom";

interface CategoryListProps {
  display?: string;
  categoryName?: Category["name"];
}

export const CategoryList = ({ display }: CategoryListProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories([
      { _id: 0, name: "Cleaning", color: "#000", url: "#" },
      { _id: 1, name: "Repair", color: "#000", url: "#" },
      { _id: 2, name: "Painting", color: "#000", url: "#" },
      { _id: 3, name: "Plumbing", color: "#000", url: "#" },
      { _id: 3, name: "Electric", color: "#000", url: "#" },
    ]);
  }, []);

  // const filteredCategories = categoryName
  //   ? category.filter((el) => el.name === categoryName)
  //   : category;

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
        <Link to={`/service/${category.name.toLowerCase()}`}>
          <CategoryItem
            key={category._id}
            category={category}
            path={`/service/${category.name.toLowerCase()}`}
          />
        </Link>
      ))}
    </div>
  );
};
