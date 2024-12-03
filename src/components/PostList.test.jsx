import { render, screen } from '@testing-library/react';
import { PostContext } from '../contexts/PostContext';
import PostList from './PostList';

describe('PostList Component', () => {
  it('renders a list of posts correctly', () => {
    // Mock data
    const mockPosts = [
      { id: 1, title: 'Post 1', content: 'This is the first post' },
      { id: 2, title: 'Post 2', content: 'This is the second post' },
    ];

    // Render PostList with a mock context provider
    render(
      <PostContext.Provider value={{ posts: mockPosts }}>
        <PostList />
      </PostContext.Provider>
    );

    // Assert that each post is displayed
    mockPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.content)).toBeInTheDocument();
    });
  });

  it('renders nothing if there are no posts', () => {
    // Render PostList with an empty post list
    render(
      <PostContext.Provider value={{ posts: [] }}>
        <PostList />
      </PostContext.Provider>
    );

    // Assert that no posts are displayed
    expect(screen.queryByText(/Post/)).not.toBeInTheDocument();
  });
});
