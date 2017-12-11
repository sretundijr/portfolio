import React from 'react';
import { navigateTo } from 'gatsby-link';

import nodeLogo from '../images/node-0fc14864.jpg';

// css
import './card.css';

const Card = (props) => {
  console.log(props);
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
      <img src={props.project.technologies[2].image} alt="technology logo" />
    </div>
  );
};

export default Card;
