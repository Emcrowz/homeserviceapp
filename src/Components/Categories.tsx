import { useState } from "react";
import styles from "./Categories.module.css";

export const Categories = () => {
  const [categories, setCategories] = useState<string[]>([
    "Cleaning",
    "Repair",
    "Painting",
    "Plumbing",
    "Electric",
  ]);

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <a href={`/service/${category}`}>{category}</a>
      ))}
    </div>
  );
};
