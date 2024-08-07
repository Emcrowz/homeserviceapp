import Login from "./Login";
import Logo from "./Logo";
import Navigation from "./Navigation";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <Logo />
      <Navigation />
      <Login />
    </div>
  );
}
