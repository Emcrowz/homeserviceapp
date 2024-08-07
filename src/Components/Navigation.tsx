import "./Navigation.modules.css";

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
