import '@testing-library/jest-dom/extend-expect';
import StyledProvider from '../../contexts/StyledContext';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Services from './index';

describe('services component', () => {
  it('renders the component without crash', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <Services />
        </MemoryRouter>
      </StyledProvider>
    );
  });

  it('renders all headings correctly', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <Services />
        </MemoryRouter>
      </StyledProvider>
    );

    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings[0]).toHaveTextContent(
      'Augmentez votre visibilité sur les réseaux.'
    );
    expect(headings[1]).toHaveTextContent(
      'Construisez un site qui ne ressemble à aucun autre.'
    );
    expect(headings[2]).toHaveTextContent(
      'Apparaissez dans les premiers résultats de recherche.'
    );
    expect(headings[3]).toHaveTextContent(
      'Gardez votre site performant et améliorez son design.'
    );
  });
});
