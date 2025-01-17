import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../App.css';
import '../AppartementPage.css';
import Maison from '../../maison.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function AppartementPage() {
  const { id } = useParams();
  const [isDescription1Visible, setDescription1Visible] = useState(false);
  const [isDescription2Visible, setDescription2Visible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); 


  const apartment = Maison.find((item) => item.id === id);

  if (!apartment) {
    return <Navigate to="/404" />;
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + apartment.pictures.length) % apartment.pictures.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % apartment.pictures.length);
  };

  return (
    <div>
      <Header />

      <div className="main-container">
        {/* Carrousel */}
        <div className="carousel-container">
          <Carousel
  showThumbs={false}           
  infiniteLoop={true}          
  autoPlay={false}             
  interval={3000}              
  showStatus={false}           
  showIndicators={false}       
  selectedItem={currentIndex}  
  onChange={(index) => setCurrentIndex(index)} 
  showArrows={false}           
>
  {apartment.pictures.map((picture, index) => (
    <div key={index}>
      <div className="image-container">
        <img src={picture} alt={`Image ${index + 1}`} />
      </div>
    </div>
  ))}
</Carousel>


          {/* Flèches */}
          <div className="carousel-arrow-left" onClick={handlePrev}>
            <span className="material-icons carousel-arrow-left">chevron_left</span>
          </div>
          <div className="carousel-arrow-right" onClick={handleNext}>
            <span className="material-icons carousel-arrow-right">chevron_right</span>
          </div>

          {/* Indicateur */}
          <div className="carousel-indicator">
            <span>{`${currentIndex + 1}/${apartment.pictures.length}`}</span>
          </div>
        </div>

        {/* Informations appartement */}
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
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa-star starsWidht ${i < apartment.rating ? 'fa-solid' : 'fa-regular'}`}
                ></i>
              ))}
            </div>
          </div>
        </div>

        {/* Description et équipements */}
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
              {isDescription1Visible && <p>{apartment.description}</p>}
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
