import React, { useState } from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import '../App.css'; 
import '../AppartementPage.css'; 

function AppartementPage() {
    // États distincts pour chaque description
    const [isDescription1Visible, setDescription1Visible] = useState(false);
    const [isDescription2Visible, setDescription2Visible] = useState(false);

    return (
        <div>
            <Header />
            
            <div className="main-container">
                <div className="image-container">
                    <img src="/Background.png" alt="Background" className="background-image" />
                </div>

                <div className="container1">
                    <div>
                        <h1 className="colorRed">Crazy loft on Canal Saint Martin</h1>
                        <h3 className="location">Paris, ile de France</h3>
                        <div className="flexRow">
                            <p className="backRed">Cozy</p>
                            <p className="backRed">Canal</p>
                            <p className="backRed">Paris</p>
                        </div>
                    </div>

                    <div>
                        <div className="displayRow2">
                            <div className="author-name">
                                <p>Alexandre</p>
                                <p className="margeDumas">Dumas</p>
                            </div>
                            <div className="iconeBoule"></div>
                        </div>
                        <div className="sizeStars">
                            <i className="fa-solid fa-star starsWidht"></i>
                            <i className="fa-solid fa-star starsWidht"></i>
                            <i className="fa-solid fa-star starsWidht"></i>
                            <i className="fa-regular fa-star starsWidht"></i>
                            <i className="fa-regular fa-star starsWidht"></i>
                        </div>
                    </div>
                </div>

                <div className="description-container">
                    {/* Première description */}
                    <div className="description-item">
                        <p 
                            className="backRed2" 
                            onClick={() => setDescription1Visible(!isDescription1Visible)}
                        >
                            Description
                            <span className={`icon ${isDescription1Visible ? 'rotate' : ''}`}>
                                <i className="fa-solid fa-chevron-up"></i>
                            </span>
                        </p>
                        {isDescription1Visible && (
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe delectus aspernatur ad consequuntur ex...</p>
                        )}
                    </div>

                    {/* Deuxième description */}
                    <div className="description-item">
                        <p 
                            className="backRed2" 
                            onClick={() => setDescription2Visible(!isDescription2Visible)}
                        >
                            Equipements
                            <span className={`icon ${isDescription2Visible ? 'rotate' : ''}`}>
                                <i className="fa-solid fa-chevron-up"></i>
                            </span>
                        </p>
                        {isDescription2Visible && (
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe delectus aspernatur ad consequuntur ex...</p>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AppartementPage;
