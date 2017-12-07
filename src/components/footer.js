
import React from 'react';

import aboutMe from '../personal-info';

// css
import './footer.css';

const Footer = () => (
  <div className="footer-container">
    <p className="contact-me">
      Contact Me @
    </p>
    <p className="contact-me">
      <a className="email-tag" href={`mailto:${aboutMe().contactInfo.email}`}>{aboutMe().contactInfo.email}</a>
    </p>
  </div >
);

export default Footer;
