import React from 'react';
import Link from 'gatsby-link';

import aboutMe from '../aboutMe';

// css
import './about-me.css';

const AboutMe = () => {
  return (
    <div>
      <h1 className="about-me">About Me</h1>
      <p>{aboutMe().email}</p>
    </div>
  );
};

export default AboutMe;
