import React from 'react';
import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.white};
  }

  * {
    font-size: 24px;
    font-family: "Inter", sans-serif;
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;
    border: none;
    box-sizing: border-box;
    list-style-type: none;
    object-fit: cover;
    image-rendering: optimizeQuality;
    padding: 0;
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 128px;
    font-weight: 500;
  }
`;

const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
