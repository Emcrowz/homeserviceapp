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
  layoutStyle?: "default" | "three-per-row" | "five-per-row";
  isServicesPage?: boolean;
  itemCustomClassName?: string;
  itemCardCustomClassName?: string;
}

const useBusinesses = (showFeatured: boolean) => {
  return useQuery({
    queryKey: ["BUSINESS", showFeatured],
    queryFn: showFeatured ? fetchFeaturedBusinesses : fetchBusinesses,
  });
};

export const BusinessList = ({
  categoryName,
  showFeatured = false,
  customClassName,
  layoutStyle = "default",
  isServicesPage = false,
  itemCustomClassName,
  itemCardCustomClassName,
}: BusinessListProps) => {
  const { data } = useBusinesses(showFeatured);
  const businesses = data ?? [];

  const filteredBusinesses = categoryName
    ? businesses.filter((business) => business.category.toLowerCase() === categoryName.toLowerCase())
    : businesses;

  const containerClass = `${styles.container} ${
    layoutStyle === "five-per-row" ? styles.fivePerRowContainer : ""
  } ${customClassName ?? ""}`;

  return (
    <div className={containerClass.trim()}>
      {filteredBusinesses.map((business) => (
        <BusinessItem
          key={business._id}
          business={business}
          isServicesPage={isServicesPage}
          customClassName={itemCustomClassName}
          cardCustomClassName={itemCardCustomClassName}
        />
      ))}
    </div>
  );
};
