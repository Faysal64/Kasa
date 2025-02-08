import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/">
        <div>
          
          <img src="/Logo.png" alt="logo" />
        </div>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </div>
    </nav>
  );
}

export default Header;
