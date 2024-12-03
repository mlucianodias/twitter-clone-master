import { createContext, useEffect, useState } from 'react';

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('http://localhost:3000/posts');
    const postsBody = await response.json();
    setPosts(postsBody);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (content) => {
    const payload = {
      author: 'Lucas Santos',
      content,
    };

    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    setPosts([data, ...posts]);
  };

  return (
    <PostContext.Provider value={{ posts, createPost }}>
      { children }
    </PostContext.Provider>
  );
}

export { PostContext, PostProvider };
