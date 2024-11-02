import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
  z-index: 1000;
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 5px 8px hsla(0, 0%, 19%, 0.085);
  padding: 24px;
  position: fixed;
  top: 60px;
`;

const HeaderLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.15rem;
`;

const HeaderNavBar = styled.nav`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  gap: 24px;

  > a {
    display: flex;
    flex-direction: column;
    font-size: 0.6rem;
    font-weight: 600;
    position: relative;
    top: 2px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #d9d9d9;
    }
  }
`;

const HeaderButton = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #d9d9d9;
  }
`;

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
