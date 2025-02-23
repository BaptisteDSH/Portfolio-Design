import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ setDarkTheme, darkTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={darkTheme ? "dark" : ""}>
      <h1>Eugénie Vernières</h1>

      <div className={`nav-menu-container ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-links">
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/CV"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            My CV
          </NavLink>
          <NavLink
            to="/Contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
        <button
          onClick={() => {
            setDarkTheme(!darkTheme);
            setIsMenuOpen(false); // Ferme le menu après le clic
          }}
          className="theme-toggle-button"
        >
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setDarkTheme: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired,
};

export default Navbar;
