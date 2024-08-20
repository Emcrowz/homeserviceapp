import { useState } from "react";

import { Button } from "../Common/Button";
// import { useDebounce } from "../../Hooks/useDebounce";
import styles from "./Search.module.css";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Search: React.FC = ({ ...props }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //   }
  // }, [debouncedSearchTerm]);

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
        placeholder="Search..."
        {...props}
      />
      <Button>Search</Button>
    </form>
  );
};
