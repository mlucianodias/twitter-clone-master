import { render, screen } from '@testing-library/react';
import { PostContext } from '../contexts/PostContext';
import Feed from '../pages/Feed';

describe('Feed Component', () => {
  it('renders the new post form and post list', () => {
    // Mock context provider
    const mockPosts = [
      { id: 1, title: 'Post 1', content: 'Content 1' },
      { id: 2, title: 'Post 2', content: 'Content 2' },
    ];

    render(
      <PostContext.Provider value={{ posts: mockPosts }}>
        <Feed />
      </PostContext.Provider>
    );

    // Verificar se o formulário de novo post está renderizando
    expect(screen.getByText(/Aqui estão suas publicações mais recentes/i)).toBeInTheDocument();

    // Verificar se a lista de posts está renderizando
    mockPosts.forEach((post) => {
      expect(screen.getByText(post.content)).toBeInTheDocument();
    });
  });
});
