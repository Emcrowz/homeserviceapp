import "./Logo.module.css";
import logo from "../../Assets/logoipsum.svg";
export const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <a href="/">
        <img src={logo} alt="logoipsum" />
      </a>
    </div>
  );
};
