import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <h1>Eugénie Vernières</h1>

      <div className={`nav-menu-container ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Portfolio
          </NavLink>
          <NavLink to="/CV" className="nav-link">
            My CV
          </NavLink>
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
