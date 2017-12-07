import React from 'react';

import aboutMe from '../aboutMe';

// css
import './index.css';

const IndexPage = () => (
  <div>
    <p className="about">{aboutMe().about}</p>
  </div>
);

export default IndexPage;
