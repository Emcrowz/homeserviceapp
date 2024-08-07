import { useState } from "react";
import "./Categories.module.css";

export const Categories = () => {
  const [categories, setCategories] = useState<string[]>([
    "Cleaning",
    "Repair",
    "Painting",
    "Plumbing",
    "Electric",
  ]);

  return (
    <div className="category-container">
      {categories.map((category) => (
        <a href={`/service/${category}`}>{category}</a>
      ))}
    </div>
  );
};
