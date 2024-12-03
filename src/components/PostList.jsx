import { useContext } from 'react';
import { Box } from '@mui/joy';
import { PostContext } from '../contexts/PostContext';
import Post from './Post';

export default function PostList() {
  const { posts } = useContext(PostContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {posts.map((post) => <Post key={post.id} post={post} />)}
    </Box>
  );
}
