import React from 'react';
import { FooterBottom, FooterWrapper } from './style';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterBottom>
        <p>&copy; Karukera Pixel</p>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
