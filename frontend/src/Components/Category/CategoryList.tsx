import { useState, useEffect } from "react";
import styles from "./CategoryList.module.css";

import { Solution } from "./Solution";
import { CategoryItem } from "./CategoryItem";

interface CategoryListProps {
  categoryName?: Solution["name"];
}

export const CategoryList = ({ categoryName }: CategoryListProps) => {
  const [solutions, setSolutions] = useState<Solution[]>([]);

  useEffect(() => {
    setSolutions([]);
  }, []);

  const filteredSolutions = categoryName
    ? solutions.filter((el) => el.category === categoryName)
    : solutions;

  return (
    <div className={styles.categoryContainer}>
      {filteredSolutions.map((solution) => (
        <CategoryItem key={solution._id} solution={solution} />
      ))}
    </div>
  );
};
