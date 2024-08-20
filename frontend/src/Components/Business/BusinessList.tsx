import { useEffect, useState } from "react";
import { Category } from "../Category/Category";
import { Business } from "./Business";
import styles from "./BusinessList.module.css";
import { BusinessItem } from "./BusinessItem";

interface BusinessListProps {
  categoryName?: Category["name"];
}

export const BusinessList = ({ categoryName }: BusinessListProps) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    setBusinesses([
      {
        _id: "a",
        name: "Hello World",
        about: "Some Random Business",
        address: "A st. 1111",
        category: "Cleaning",
        contactPerson: "Contact Person the First",
        email: "Hello@World.com",
        imageUrls: [],
      },
      {
        _id: "b",
        name: "Another One",
        about: "Some Random Business",
        address: "A st. 1111",
        category: "Painting",
        contactPerson: "Contact Person the Second",
        email: "Another@One.com",
        imageUrls: [],
      },
    ]);
  }, []);

  const filteredBusinesses = categoryName
    ? businesses.filter((business) => business.category === categoryName)
    : businesses;

  return (
    <div className={styles.container}>
      {filteredBusinesses.map((business) => (
        <BusinessItem key={business._id} business={business} />
      ))}
    </div>
  );
};
