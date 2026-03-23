import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "15px 30px" }}>
      <h2>CampusConnect</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link>
      </nav>
    </header>
  );
}

export default Header;