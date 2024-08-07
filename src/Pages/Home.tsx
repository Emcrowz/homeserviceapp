import { Categories } from "../Components/Categories";
import { Search } from "../Components/Search";
import TopBar from "../Components/TopBar";
import "./Home.module.css";

export const Home = () => {
  return (
    <div className="main-containter">
      <TopBar />
      <h2>Find Home Service/Repair Near You</h2>
      <span>Explore Best Home Services & Repair near you</span>
      <Search />
      <Categories />
    </div>
  );
};
