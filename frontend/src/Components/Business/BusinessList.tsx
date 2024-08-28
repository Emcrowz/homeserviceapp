import { Category } from "../Category/Category";
import { BusinessItem } from "./BusinessItem";
import { useQuery } from "@tanstack/react-query";
import { fetchBusinesses } from "./BusinessApi";
import styles from "./BusinessList.module.css";

interface BusinessListProps {
  categoryName?: Category["name"];
  listStyle?: string;
}

const useBusinesses = () => {
  return useQuery({
    queryKey: ["BUSINESS"],
    queryFn: fetchBusinesses,
  });
};

export const BusinessList = ({ categoryName, listStyle }: BusinessListProps) => {
  const { data } = useBusinesses();
  const businesses = data ?? [];

  const filteredBusinesses = categoryName
    ? businesses.filter((business) => business.category.toLocaleLowerCase() === categoryName)
    : businesses;

  return (
    <div className={`${listStyle === "suggestions" ? styles[`${listStyle}`] : styles[`container`]}`}>
      {filteredBusinesses.map((business) => (
        <BusinessItem
          key={business._id}
          business={business}
          itemStyle={listStyle === "suggestions" ? "suggestion" : null}
        />
      ))}
    </div>
  );
};
