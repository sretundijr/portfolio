import React from 'react';

// css
import './card.css';

const Card = (props) => {
  console.log(props);
  return (
    <div className="card-container">
      <p className="card-title">Title:</p>
      <p>{props.project.title}</p>
      <p className="card-title">Description:</p>
      <p>{props.project.description}</p>
      <p className="card-title">URL:</p>
      <p>
        <a
          target="_blank"
          className="project-link"
          href={`${props.project.appLink}`}
        >{props.project.appLink}
        </a>
      </p>
      <p className="card-title">GitHub:</p>
      <p>
        <a
          target="_blank"
          className="project-link"
          href={`${props.project.gitHubLink}`}
        >{props.project.gitHubLink}
        </a>
      </p>
    </div>
  );
};

export default Card;
