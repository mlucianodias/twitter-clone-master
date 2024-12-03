// PostList.test.jsx
import { render, screen } from '@testing-library/react';
import { PostContext } from '../contexts/PostContext';
import PostList from './PostList';

describe('PostList Component', () => {
  it('renders a list of posts correctly', () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', content: 'This is the first post' },
      { id: 2, title: 'Post 2', content: 'This is the second post' },
    ];

    render(
      <PostContext.Provider value={{ posts: mockPosts }}>
        <PostList />
      </PostContext.Provider>
    );

    mockPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.content)).toBeInTheDocument();
    });
  });

  it('renders nothing if there are no posts', () => {
    render(
      <PostContext.Provider value={{ posts: [] }}>
        <PostList />
      </PostContext.Provider>
    );

    expect(screen.queryByText(/Post/)).not.toBeInTheDocument();
  });
});
