import '@testing-library/jest-dom/extend-expect';
import StyledProvider from '../../contexts/StyledContext';
import { render, screen } from '@testing-library/react';
import Hero from './index';

describe('hero component', () => {
  it('renders the component without crash', () => {
    render(
      <StyledProvider>
        <Hero heading="This is a test" />
      </StyledProvider>
    );
  });

  it('renders heading page', () => {
    render(
      <StyledProvider>
        <Hero heading="This is a test" />
      </StyledProvider>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('This is a test');
  });
});
