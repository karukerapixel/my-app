import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StyledProvider from './contexts/StyledContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledProvider>
  </React.StrictMode>
);
