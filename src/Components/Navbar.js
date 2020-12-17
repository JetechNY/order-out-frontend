import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    render(){
        return (
            <div className="navbar">
                <span className="navbar-links">
                    <NavLink to="/" className="navbar-link"> Home </NavLink>
                    <NavLink to="/search" className="navbar-link"> Search </NavLink>
                    <NavLink to="/my-account" className="navbar-link"> My Account </NavLink>
                    <NavLink to="/restaurants" className="navbar-link"> Restaurants </NavLink>
                    <NavLink to="/menus" className="navbar-link"> Menus </NavLink>
                    <NavLink to="/carts" className="navbar-link"> Cart </NavLink>
                </span>
            </div>
        )
    }

}

export default NavBar
