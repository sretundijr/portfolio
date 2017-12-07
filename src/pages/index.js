import React from 'react';

import aboutMe from '../personal-info';

// css
import './index.css';

const IndexPage = () => (
  <div>
    <p className="about">{aboutMe().about}</p>
  </div>
);

export default IndexPage;
