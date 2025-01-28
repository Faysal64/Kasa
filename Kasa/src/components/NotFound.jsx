import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import '../NotFound.css';

const NotFound = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header />
      <div className="flexCentre">
        <div className="erreur">404</div>
        <div className="color">
          {isMobile ? (
            <>Oups! La page que <br /> vous demandez n'existe pas.</>
          ) : (
            "Oups! La page que vous demandez n'existe pas."
          )}
        </div>
        <Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
