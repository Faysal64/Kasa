import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import Maison from '../../maison.json';

function Appartement() {
  return (
    <div className="grid">
      <div className="grid2">
        {Maison.map((item) => (
          <div key={item.id} className="redGrid">
            <Link to="/Appartement" className="linkWrapper">
              <img src={item.cover} alt={item.title} className="cardImage" />
              <div className="textContainer">
                <span className="title">{item.title}</span>
                <span className="location">{item.location}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appartement;
