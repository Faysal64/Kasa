import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../App.css';
import '../Slideshow.css';
import Maison from '../../maison.json';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Collapse from './Collapse';  // Import du composant Collapse

function AppartementPage() {
  const { id } = useParams();
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

  const arrowsTrue = apartment.pictures.length > 1;

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
          {arrowsTrue && (
            <>
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
            </>
          )}
        </div>

        {/* Informations appartement */}
        <div className="container1">
          <div>
            <h2 className="colorRed">{apartment.title}</h2>
            <h3 className="location">{apartment.location}</h3>
            <div className="flexRow">
              {apartment.tags.map((tag, index) => (
                <p className="backRed" key={index}>{tag}</p>
              ))}
            </div>
          </div>

          <div className='flexRow1'>
            <div className="displayRow2">
              <div className="author-name">
                <p>{apartment.host.name.split(' ')[0]}</p>
                <p className="margeDumas">{apartment.host.name.split(' ')[1]}</p>
              </div>
              <div className="iconeBoule">
                <img
                  src={apartment.host.picture}
                  alt={`Photo de ${apartment.host.name}`}
                  className="host-picture"
                />
              </div>
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

        <div className="apartment-description-container slideshow-description">
          <Collapse title="Description" className="slideshow-collapse">
            <p>{apartment.description}</p>
          </Collapse>

          <Collapse title="Équipements" className="slideshow-collapse">
            <ul>
              {apartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AppartementPage;
