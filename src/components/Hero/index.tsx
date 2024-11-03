import React from 'react';
import { HeroWrapper } from './style';

type HeroProps = {
  heading: string;
};

const Hero: React.FC<HeroProps> = ({ heading }) => {
  return (
    <HeroWrapper>
      <h1>{heading}</h1>
    </HeroWrapper>
  );
};

export default Hero;
