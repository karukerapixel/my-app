import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderButton, HeaderLogo, HeaderNavBar, HeaderWrapper } from './style';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo to="/">Karukera Pixel</HeaderLogo>
      <HeaderNavBar>
        <NavLink to="#">Ma sélection</NavLink>
        <NavLink to="#">Features</NavLink>
        <NavLink to="#">Services</NavLink>
        <NavLink to="#">Mes actualités</NavLink>
      </HeaderNavBar>
      <HeaderButton type="button">Contactez-moi</HeaderButton>
    </HeaderWrapper>
  );
};

export default Header;
