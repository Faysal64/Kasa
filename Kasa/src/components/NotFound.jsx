import React from 'react';
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
        <div>Retourner sur la page d'accueil</div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
