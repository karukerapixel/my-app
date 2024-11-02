import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const PortfolioWrapper = styled.section`
  width: 80%;
  margin: 60px 0;
`;

const PortfolioList = styled.ul`
  width: 100%;
  height: 600px;
  display: flex;
  gap: 24px;
  margin-top: 60px;
`;

const PortfolioListItem = styled.li`
  width: 25%;
  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &:hover {
      > img {
        transform: translate(-10px);
      }
    }

    > img {
      width: 100%;
      height: 90%;
      transition: all 0.3s ease-in-out;
    }

    > h3 {
      font-size: 0.6rem;
      text-transform: uppercase;
      margin-top: 10px;
    }

    > p {
      font-size: 0.6rem;
      color: hsl(0, 0%, 75%);
    }
  }
`;

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
