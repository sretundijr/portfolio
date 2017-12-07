
import React from 'react';
import Link from 'gatsby-link';

import NavBar from '../components/nav-bar';

import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="name-container">
      <h3 className="my-name">
        <Link className="navigate-home" to="/">
          Steve Retundi Jr.
        </Link>
      </h3>
    </div>
    <NavBar />
  </div >
);

export default Header;
