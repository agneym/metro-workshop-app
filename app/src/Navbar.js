import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClassName = "active";
  return (
    <nav
      className="navbar is-fixed-top is-light navigation"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-start">
        <NavLink
          to="/"
          exact
          className="navbar-item"
          activeClassName={activeClassName}
        >
          Home
        </NavLink>
        <NavLink
          to="/stations"
          exact
          className="navbar-item"
          activeClassName={activeClassName}
        >
          Stations
        </NavLink>
        <NavLink
          to="/fare"
          exact
          className="navbar-item"
          activeClassName={activeClassName}
        >
          Fare Calculator
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
