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
    { title: 'Fiabilité', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Respect', text: 'Suspendisse vitae orci in metus pulvinar feugiat ut sed nisl.' },
    { title: 'Service', text: 'Nulla facilisi. Nam facilisis sapien sit amet ipsum placerat egestas.' },
    { title: 'Sécurité', text: 'Praesent vitae magna vel purus dictum ultricies.' },
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
