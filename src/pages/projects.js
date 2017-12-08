import React from 'react';

import Card from '../components/card';

import aboutMe from '../personal-info';

import './projects.css';

const Projects = () => {
  const listOfCards = aboutMe().projects.map(item => <Card key={item.title} project={item} />);
  return (
    <div className="projects">
      {listOfCards}
    </div>
  );
};

export default Projects;
