import React from 'react';

import TechLogo from './tech-logo';

import './tech-logo.css';

const TechList = (props) => {
  const listOfTech = props.list.map((item) => {
    if (item.image) {
      return (<TechLogo src={item.image} />);
    }
  });
  return (
    <div className="tech-logo-container">
      {listOfTech}
    </div>
  );
};

export default TechList;
