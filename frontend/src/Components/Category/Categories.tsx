import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Categories.module.css";

interface CategoriesProps {
  display?: string;
}

export const Categories = ({ display }: CategoriesProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories(["Cleaning", "Repair", "Painting", "Plumbing", "Electric"]);
  }, []);

  return (
    <div
      className={
        display === "vertical"
          ? styles.categoriesVertical
          : display === "horizontal"
          ? styles.categoriesHorizontal
          : styles.categoriesNone
      }
    >
      {categories.map((category) => (
        <Link to={`/service/${category.toLowerCase()}`}>{category}</Link>
      ))}
    </div>
  );
};
