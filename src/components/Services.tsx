import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import image1 from '../assets/personnes-connectees-reseaux-sociaux_23-2149160251.jpg';
import image2 from '../assets/concepteur-web-feminin-au-bureau-ordinateur-portable_23-2149749890.avif';
import image3 from '../assets/concept-page-accueil-barre-recherche_23-2150040213.avif';
import image4 from '../assets/femme-affaires-lunettes-lors-presentation-reunion-ses-pairs_23-2148824817.avif';

const ServicesWrapper = styled.div`
  width: 80%;
  margin: 60px 0;
`;

const ServicesList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 400px);
  grid-gap: 24px;
`;

const ServicesListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;

  &:nth-child(1) {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: -1;
    background-image: url(${image1});
  }

  &:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: -1;
    grid-row: 1;
    background-image: url(${image2});
  }

  &:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    background-image: url(${image3});
  }

  &:nth-child(4) {
    grid-column: 3;
    grid-row: 2;
    background-image: url(${image4});
  }

  &:hover {
    > a {
      > h2 {
        color: #f7f7f7;
        background-color: ${props => props.theme.colors.black};
        transform: translate(24px, -24px);
        box-shadow: 0 5px 8px hsla(0, 0%, 19%, 0.4);
      }
    }
  }

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.3s ease-in-out;

    > h2 {
      width: 75%;
      font-size: 1rem;
      font-weight: bold;
      background-color: #fff;
      padding: 12px 24px;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Services: React.FC = () => {
  return (
    <ServicesWrapper>
      <ServicesList>
        <ServicesListItem>
          <Link to="#">
            <h2>Augmentez votre visibilité sur les réseaux.</h2>
          </Link>
        </ServicesListItem>
        <ServicesListItem>
          <Link to="#">
            <h2>Construisez un site qui ne ressemble à aucun autre.</h2>
          </Link>
        </ServicesListItem>
        <ServicesListItem>
          <Link to="#">
            <h2>Apparaissez dans les premiers résultats de recherche.</h2>
          </Link>
        </ServicesListItem>
        <ServicesListItem>
          <Link to="#">
            <h2>Gardez votre site performant et améliorez son design.</h2>
          </Link>
        </ServicesListItem>
      </ServicesList>
    </ServicesWrapper>
  );
};

export default Services;
