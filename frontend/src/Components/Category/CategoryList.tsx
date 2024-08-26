import { useState, useEffect } from "react";
import styles from "./CategoryList.module.css";

import { Category } from "./Category";
import { CategoryItem } from "./CategoryItem";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../Router/RouterConsts";

interface CategoryListProps {
  display?: string;
  categoryName?: Category["name"];
}

export const CategoryList = ({ display }: CategoryListProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  // [
  //   { _id: 0, name: "Cleaning", color: "#000", url: "#" },
  //   { _id: 1, name: "Repair", color: "#000", url: "#" },
  //   { _id: 2, name: "Painting", color: "#000", url: "#" },
  //   { _id: 3, name: "Plumbing", color: "#000", url: "#" },
  //   { _id: 3, name: "Electric", color: "#000", url: "#" },
  // ]

  useEffect(() => {
    axios
      .get(`${API + "categories"}`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
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
          <CategoryItem category={category} path={`/service/${category.name.toLowerCase()}`} />
        </Link>
      ))}
    </div>
  );
};
