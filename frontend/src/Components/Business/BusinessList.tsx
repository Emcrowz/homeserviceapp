import { useEffect, useState } from "react";
import { Category } from "../Category/Category";
import { Business } from "./Business";
import styles from "./BusinessList.module.css";
import { BusinessItem } from "./BusinessItem";
import axios from "axios";
import { API } from "../../Router/RouterConsts";

interface BusinessListProps {
  categoryName?: Category["name"];
}

export const BusinessList = ({ categoryName }: BusinessListProps) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    axios
      .get(`${API + "businesses"}`)
      .then((res) => {
        setBusinesses(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
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
