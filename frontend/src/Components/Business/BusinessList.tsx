import { Category } from "../Category/Category";
import { BusinessItem } from "./BusinessItem";
import { useQuery } from "@tanstack/react-query";
import { fetchBusinesses, fetchFeaturedBusinesses } from "./BusinessApi";
import styles from "./BusinessList.module.css";

interface BusinessListProps {
  categoryName?: Category["name"];
  listStyle?: string;
  showFeatured?: boolean;
  customClassName?: string;
}

const useBusinesses = (showFeatured: boolean) => {
  return useQuery({
    queryKey: ["BUSINESS", showFeatured],
    queryFn: showFeatured ? fetchFeaturedBusinesses : fetchBusinesses,
  });
};

export const BusinessList = ({ categoryName, listStyle, showFeatured = false, customClassName }: BusinessListProps) => {
  const { data } = useBusinesses(showFeatured);
  const businesses = data ?? [];

  const filteredBusinesses = categoryName
    ? businesses.filter((business) => business.category.toLowerCase() === categoryName.toLowerCase())
    : businesses;

  return (
    <div className={customClassName ? customClassName : styles.container}>
      {filteredBusinesses.map((business) => (
        <BusinessItem key={business._id} business={business} />
      ))}
    </div>
  );
};
