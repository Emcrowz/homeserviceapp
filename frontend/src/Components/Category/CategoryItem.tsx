import React from "react";
import classNames from "classnames";
import styles from "./CategoryItem.module.css";
import { Category } from "./Category";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa6";
import * as PiIcons from "react-icons/pi";

interface CategoryItemProps {
  category: Category;
  path: string;
  layout?: "main" | "categories";
  className?: string;
}

const getIconComponent = (iconName: string) => {
  if (FaIcons[iconName as keyof typeof FaIcons]) {
    return FaIcons[iconName as keyof typeof FaIcons];
  } else if (PiIcons[iconName as keyof typeof PiIcons]) {
    return PiIcons[iconName as keyof typeof PiIcons];
  }
  return null;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, path, layout = "main", className }) => {
  const navigate = useNavigate();
  const IconComponent = getIconComponent(category.icon.url);

  return (
    <div
      className={classNames(styles.categoryItem, { [styles.categoryItemServices]: layout === "categories" }, className)}
      onClick={() => navigate(path)}
    >
      {IconComponent && <IconComponent className={styles.icon} style={{ color: category.color }} />}
      <h3 className={styles.name}>{category.name}</h3>
    </div>
  );
};
