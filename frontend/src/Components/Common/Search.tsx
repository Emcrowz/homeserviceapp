import { useState } from "react";

import { Button } from "../Common/Button";
import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Search: React.FC = ({ ...props }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
        placeholder="Search"
        {...props}
      />
      <Button className={styles.Button}>
        <CiSearch className={styles.ciSearchIcon} />
      </Button>
    </form>
  );
};
