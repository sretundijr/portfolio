import React from 'react';
import { navigateTo } from 'gatsby-link';

// css
import './nav-bar.css';

const NavBar = () => (
  <div className="nav-btn-container">
    <button onClick={() => navigateTo('/about-me')} className="nav-btn">About</button>
    <button onClick={() => navigateTo('/Projects')} className="nav-btn">Projects</button>
  </div>
);

export default NavBar;
