import React from 'react';

function Header() {
  return (
    <nav className='header'>
      <div>
        <img src='Logo.png' alt='logo'></img>
      </div>
      <div className='nav-links'>
        <div>Accueil</div>
        <div>A propos</div>
      </div>
    </nav>
  );
}

export default Header;
