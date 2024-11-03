import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Portfolio from './index';

describe('services component', () => {
  it('renders the component without crash', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );
  });

  it('renders heading section', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Ma sélection');
  });

  it('renders project link', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toBeInTheDocument();
  });

  it('renders project cover', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    const images = screen.getAllByRole('img');
    expect(images[0]).toBeInTheDocument();
  });

  it('renders project heading', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    const headings = screen.getAllByRole('heading', {level: 3});
    expect(headings[0]).toBeInTheDocument();
  });
});
