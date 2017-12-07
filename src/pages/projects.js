import React from 'react';

import Card from '../components/card';

import aboutMe from '../aboutMe';

import './projects.css';

const Projects = () => {
  const listOfCards = aboutMe().projects.map(item => <Card project={item} />);
  return (
    <div className="projects">
      {listOfCards}
    </div>
  );
};

export default Projects;
