import React from 'react';

// css
import './tech-logo.css';

const TechLogo = (props) => {
  return (
    <div>
      <img className="tech-logo" src={props.src} alt={`${props.alt} logo`} />
    </div>
  );
};

export default TechLogo;
