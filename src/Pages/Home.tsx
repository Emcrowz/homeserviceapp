import { Categories } from "../Components/Categories";
import { Search } from "../Components/Search";
import "./Home.module.css";

export const Home = () => {
  return (
    <div className="main-containter">
      <h1>Find Home Service/Repair Near You</h1>
      <span>Explore Best Home Services & Repair near you</span>
      <Search />
      <Categories />
    </div>
  );
};
