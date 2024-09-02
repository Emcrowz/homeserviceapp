import { BusinessList } from "../Components/Business/BusinessList";
import styles from "./Services.module.css";
export const Services = () => {
  return (
    <BusinessList
      layoutStyle="five-per-row"
      customClassName={styles.businessListInServicesPage}
      isServicesPage={true}
    />
  );
};
