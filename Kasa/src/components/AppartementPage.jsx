import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../App.css';
import '../AppartementPage.css';
import Maison from '../../maison.json'; // Assurez-vous que les données sont disponibles

function AppartementPage() {
  const { id } = useParams();
  const [isDescription1Visible, setDescription1Visible] = useState(false);
  const [isDescription2Visible, setDescription2Visible] = useState(false);

  // Trouver les données de l'appartement correspondant
  const apartment = Maison.find((item) => item.id === id);

  if (!apartment) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <Header />

      <div className="main-container">
        <div className="image-container">
          <img src={apartment.cover} alt={apartment.title} className="background-image" />
        </div>

        <div className="container1">
          <div>
            <h1 className="colorRed">{apartment.title}</h1>
            <h3 className="location">{apartment.location}</h3>
            <div className="flexRow">
              {apartment.tags.map((tag, index) => (
                <p className="backRed" key={index}>{tag}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="displayRow2">
              <div className="author-name">
                <p>{apartment.host.name.split(' ')[0]}</p>
                <p className="margeDumas">{apartment.host.name.split(' ')[1]}</p>
              </div>
              <div className="iconeBoule"></div>
            </div>
            <div className="sizeStars">
              {/* Rendu des étoiles basé sur le rating */}
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa-star starsWidht ${i < apartment.rating ? 'fa-solid' : 'fa-regular'}`}
                ></i>
              ))}
            </div>
          </div>
        </div>

        <div className="apartment-description-container">
          <div className={`apartment-description-item ${isDescription1Visible ? 'open' : ''}`}>
            <p
              className="apartment-backRed2"
              onClick={() => setDescription1Visible(!isDescription1Visible)}
            >
              Description
              <span className={`apartment-icon ${isDescription1Visible ? 'rotate' : ''}`}>
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </p>
            <div className="apartment-description-visible">
              {isDescription1Visible && (
                <p>{apartment.description}</p>
              )}
            </div>
          </div>

          <div className={`apartment-description-item ${isDescription2Visible ? 'open' : ''}`}>
            <p
              className="apartment-backRed2"
              onClick={() => setDescription2Visible(!isDescription2Visible)}
            >
              Équipements
              <span className={`apartment-icon ${isDescription2Visible ? 'rotate' : ''}`}>
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </p>
            <div className="apartment-description-visible">
              {isDescription2Visible && (
                <ul>
                  {apartment.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AppartementPage;
