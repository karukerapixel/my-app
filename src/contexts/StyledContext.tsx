import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: '#303030',
    white: '#fff'
  },
};

interface StyledProviderProps {
  children: ReactNode;
}

const StyledProvider: React.FC<StyledProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyledProvider;
