import '@testing-library/jest-dom/extend-expect';
import StyledProvider from '../../contexts/StyledContext';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Hero from './index';

describe('hero component', () => {
  it('renders the component without crash', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <Hero />
        </MemoryRouter>
      </StyledProvider>
    );
  });

  it('renders heading section', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <Hero />
        </MemoryRouter>
      </StyledProvider>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Incroyable, moderne, fluide & sans template.');
  });
});
