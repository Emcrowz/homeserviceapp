import styles from "./Search.module.css";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Search: React.FC = ({ ...props }: SearchProps) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        placeholder="Search..."
        {...props}
      />
      <button>Search</button>
    </form>
  );
};
