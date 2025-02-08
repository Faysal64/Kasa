import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Collapse from './Collapse';
import '../About.css';

const About = () => {
  const descriptions = [
    { title: 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', text: 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.' },
    { title: 'Sécurité', text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.' },
  ];

  return (
    <div className="about-page">
      <Header />
      <div className="sizeImage-container">
        <img src="/Mountain.png" alt="Mountain" className="sizeImage" />
      </div>
      <div className="description-container1 about-description">
        {descriptions.map((item, index) => (
          <Collapse key={index} title={item.title} className="about-collapse">
            <p className="description-text">{item.text}</p>
          </Collapse>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
