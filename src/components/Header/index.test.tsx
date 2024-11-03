import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('header component', () => {
  it('renders the component without crash', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('renders the logo with correct text', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logoElement = screen.getByText(/Karukera Pixel/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('renders all navlinks', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const links = ['Ma sélection', 'Features', 'Services', 'Mes actualités'];
    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it('renders a button', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
