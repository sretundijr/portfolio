import React from 'react';
import { navigateTo } from 'gatsby-link';

import TechList from './tech-list';

// css
import './card.css';

const Card = (props) => {
  return (
    <div
      role="link"
      tabIndex="0"
      onClick={() => navigateTo('/project')}
      onKeyDown={() => navigateTo('/project')}
      className="card-container"
    >
      <h3>{props.project.title}</h3>
      <img src={props.project.image} alt="project images" />
      <p>{props.project.description}</p>
      <TechList list={props.project.technologies} />
    </div>
  );
};

export default Card;
