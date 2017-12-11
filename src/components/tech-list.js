import React from 'react';

import TechLogo from './tech-logo';

import './tech-logo.css';

const TechList = (props) => {
  const listOfTech = props.list.map((item) => {
    if (item.image) {
      return (<TechLogo key={item.type} src={item.image} alt={item.type} />);
    }
  });
  return (
    <div className="tech-logo-container">
      {listOfTech}
    </div>
  );
};

export default TechList;
