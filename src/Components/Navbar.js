import React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar" id="navbar">
        <span className="navbar-links">
          <NavLink to="/" className="navbar-link">
            <img alt="home" src="../icon3.png" />
          </NavLink>
          {/* <NavLink to="/my-account" className="navbar-link"> My Account </NavLink> */}
          <NavLink to="/restaurants" className="navbar-link">
            {" "}
            Restaurants{" "}
          </NavLink>
          <NavLink to="/carthistory" className="navbar-link">
            {" "}
            Order History{" "}
          </NavLink>
        </span>
      </div>
    );
  }
}

export default NavBar;
