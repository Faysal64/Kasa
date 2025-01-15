import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import '../NotFound.css';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flexCentre">
        <div className="erreur">404</div>
        <div className="color">Oups! La page que vous demandez n'existe pas.</div>
        <Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
