import React from 'react';

// css
import './tech-logo.css';

const TechLogo = (props) => {
  return (
    <div>
      <img className="tech-logo" src={props.src} alt="Tech logo" />
    </div>
  );
};

export default TechLogo;
