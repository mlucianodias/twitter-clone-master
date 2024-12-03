import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header with the correct text and link', () => {
    // Render o componente dentro de um Router
    render(
      <Router>
        <Header />
      </Router>
    );

    // Verificar se o texto "Twitter" está presente
    const headerText = screen.getByText(/Twitter/i);
    expect(headerText).toBeInTheDocument();

    // Verificar se o texto "Twitter" é um link para a página inicial
    const linkElement = screen.getByRole('link', { name: /Twitter/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
