import "./Search.module.css";

export const Search: React.FC = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Search</button>
    </form>
  );
};
