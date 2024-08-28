import { Category } from "../Category/Category";
import { BusinessItem } from "./BusinessItem";
import { useQuery } from "@tanstack/react-query";
import { fetchBusinesses } from "./BusinessApi";
import styles from "./BusinessList.module.css";

interface BusinessListProps {
  categoryName?: Category["name"];
}

const useBusinesses = () => {
  return useQuery({
    queryKey: ["BUSINESS"],
    queryFn: fetchBusinesses,
  });
};

export const BusinessList = ({ categoryName }: BusinessListProps) => {
  const { data } = useBusinesses();
  const businesses = data ?? [];

  // const [businesses, setBusinesses] = useState<Business[]>([]);

  // useEffect(() => {
  //   axios
  //     .get(`${API + "businesses"}`)
  //     .then((res) => {
  //       setBusinesses(res.data);
  //     })
  //     .catch((err) => {
  //       throw new Error(err);
  //     });
  // }, []);

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
