import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import nike from '../assets/f8cbda723f6e1e79c46e0bdf58d8e329.jpg';
import sopimat from '../assets/52e3fabd6d7082f8648060bcdcdf9ab9.jpg';
import adn from '../assets/01e135a5bcabe81ce279076de8dfbfd9.jpg';
import playstation from '../assets/da88226e7cffed04311f44a1d0b01407.jpg';

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
        <PortfolioListItem>
          <Link to="http://">
            <img src={nike} alt="nike cover" />
            <h3>Nike</h3>
            <p>Refonte de site</p>
          </Link>
        </PortfolioListItem>
        <PortfolioListItem>
          <Link to="http://">
            <img src={sopimat} alt="sopimat cover" />
            <h3>Sopimat</h3>
            <p>Refonte de site | Marketing</p>
          </Link>
        </PortfolioListItem>
        <PortfolioListItem>
          <Link to="http://">
            <img src={adn} alt="adn cover" />
            <h3>Adn</h3>
            <p>Refonte de site</p>
          </Link>
        </PortfolioListItem>
        <PortfolioListItem>
          <Link to="http://">
            <img src={playstation} alt="playstation cover" />
            <h3>Playstation</h3>
            <p>Refonte de site</p>
          </Link>
        </PortfolioListItem>
      </PortfolioList>
    </PortfolioWrapper>
  );
};

export default Portfolio;
