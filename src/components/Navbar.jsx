import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Eugénie Vernières</h1>

      <div className="nav-menu-container">
        <div>
          <NavLink to="/">
            <ul>Portfolio</ul>
          </NavLink>
        </div>
        <div>
          <NavLink to="/CV">
            <ul>My CV</ul>
          </NavLink>
        </div>
        <div>
          <NavLink to="/Contact">
            <ul>Contact</ul>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
