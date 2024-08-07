import "./Search.modules.css";

export const Search = () => {
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
