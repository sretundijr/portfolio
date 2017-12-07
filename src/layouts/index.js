import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// css
import './index.css';
import './child-container.css';

// components
import Footer from '../components/footer';
import Header from '../components/header';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Steve Retundi Jr."
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      <Header />
    </div>
    <div className="child-container">
      {children()}
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
