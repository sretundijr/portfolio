import React from 'react';

// css
import './about-me.css';

import personalInfo from '../personal-info';

const AboutMe = () => {
  return (
    <div>
      <h2 className="about-page-title">The Journey So Far</h2>
      <p className="about-page-content">{personalInfo().bio}</p>
    </div>
  );
};

export default AboutMe;
