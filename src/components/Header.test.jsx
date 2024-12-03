import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header with the correct text and link', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const headerText = screen.getByText(/Twitter/i);
    expect(headerText).toBeInTheDocument();

    const linkElement = screen.getByRole('link', { name: /Twitter/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
