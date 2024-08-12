import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <nav className={styles.links}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
    </nav>
  );
};

export default Navigation;
