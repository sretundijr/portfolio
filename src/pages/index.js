import React from 'react';

import aboutMe from '../personal-info';

// css
import './index.css';
import './placeHolder.css';

const IndexPage = () => (
  <div>
    <div className="index-container">
      <p className="index-content">{aboutMe().about}</p>
      <div className="first-image large-square" />
    </div>
    <div className="second-image xLarge-square" />
  </div>
);

export default IndexPage;
