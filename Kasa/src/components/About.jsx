import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../About.css';

const About = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const descriptions = [
    { title: "Fiabilité", text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Service", text: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
    { title: "Sécurité", text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôtes qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
  ];

  return (
    <div className="about-page"> 
      <Header />
      <div className="sizeImage-container">
        <img src="/Mountain.png" alt="Mountain" className="sizeImage" />
      </div>
      <div className="description-container1">
        {descriptions.map((item, index) => (
          <div className="description-item1" key={index}>
            <p
              className="backRed2"
              onClick={() => toggleDescription(index)}
            >
              {item.title}
              <span className={`icon ${visibleIndex === index ? 'rotate' : ''}`}>
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </p>
            {visibleIndex === index && (
              <div className="description-text-container">
                <p className="description-text">{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
