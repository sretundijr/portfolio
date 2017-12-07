import React from 'react';

// css
import './about-me.css';

import music from './find-new-music.png';

const AboutMe = () => {
  return (
    <div>
      <h1 className="about-me">About Me</h1>
      <div>
        <img src={`${music}`} alt="logo" />
      </div>
    </div>
  );
};

export default AboutMe;
