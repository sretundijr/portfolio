import React from 'react';

// css
import './about-me.css';

import personalInfo from '../personal-info';

const AboutMe = () => {
  return (
    <div>
      <div className="about-page-container">
        <div className="about-square-1 about-image-1" />
        <div className="about-page-content">
          <h2 className="about-page-title">The Journey So Far</h2>
          <p>{personalInfo().bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
