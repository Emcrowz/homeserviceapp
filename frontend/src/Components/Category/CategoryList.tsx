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

  // const [categories, setCategories] = useState<Category[]>([]);

  // useEffect(() => {
  //   axios
  //     .get(`${API + "categories"}`)
  //     .then((res) => {
  //       setCategories(res.data);
  //     })
  //     .catch((err) => {
  //       throw new Error(err);
  //     });
  // }, []);

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
