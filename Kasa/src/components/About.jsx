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
    { title: 'Fiabilité', text: 'Nous assurons la fiabilité de nos services en respectant nos engagements.' },
    { title: 'Respect', text: 'Le respect de la vie privée de nos utilisateurs est une priorité.' },
    { title: 'Service', text: 'Nous offrons un service client disponible et à l’écoute.' },
    { title: 'Sécurité', text: 'La sécurité de vos données est notre principale préoccupation.' },
  ];

  return (
    <div className="app-container"> {/* Conteneur principal avec Flexbox */}
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
            {visibleIndex === index && <p className="description-text">{item.text}</p>}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
