import React from 'react';
import { Link } from 'react-router-dom';
import { PortfolioList, PortfolioListItem, PortfolioWrapper } from './style';
import projects from '../../data/projects.json'

const Portfolio: React.FC = () => {
  return (
    <PortfolioWrapper>
      <h2>Ma sélection</h2>
      <PortfolioList>
        {projects.map((project, index) => (
          <PortfolioListItem key={index}>
            <Link to={project.link}>
              <img src={project.imgUrl} alt={`${project.name} cover`} />
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </Link>
          </PortfolioListItem>
        ))}
      </PortfolioList>
    </PortfolioWrapper>
  );
};

export default Portfolio;
