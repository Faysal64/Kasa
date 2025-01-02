import React from 'react';
import '../App.css'; // Ajustez également ce chemin si nécessaire
import Maison from '../../maison.json';

function Appartement() {
  return (
    <div className="grid">
      <div className="grid2">
        {Maison.map((item) => (
          <div key={item.id} className="redGrid">
            <img src={item.cover} alt={item.title} className="cardImage" />
            <div className="textContainer">
              <span className="title">{item.title}</span>
              <span className="location">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appartement;
 