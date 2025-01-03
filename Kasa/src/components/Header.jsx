import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link

function Header() {
  return (
    <nav className='header'>
      <div>
        <img src='Logo.png' alt='logo' />
      </div>
      <div className='nav-links'>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link> 
      </div>
    </nav>
  );
}

export default Header;
