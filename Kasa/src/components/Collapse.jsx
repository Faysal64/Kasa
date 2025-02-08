import React, { useState } from 'react';

const Collapse = ({ title, children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className={`apartment-description-item ${className} ${isVisible ? 'open' : ''}`}>
      <p className="apartment-backRed2" onClick={toggleVisibility}>
        {title}
        <span className={`apartment-icon ${isVisible ? 'rotate' : ''}`}>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </p>
      <div className="apartment-description-visible">
        {isVisible && children}
      </div>
    </div>
  );
};

export default Collapse;
