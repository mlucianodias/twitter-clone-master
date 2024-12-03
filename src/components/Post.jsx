import { Box, CardContent, Typography } from '@mui/material';
import { Button, Card, CardActions } from '@mui/joy';

import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';
import { useState } from 'react';

export default function Post({ post }) {
  const [starsCount, setStarsCount] = useState(post.starsCount);

  const favorite = async () => {
    const response = await fetch(`http://localhost:3000/posts/${post.id}/favorite`, {
      method: 'PUT',
    });

    const updatedPost = await response.json();
    setStarsCount(updatedPost.starsCount);
  };

  return (
    <Card sx={{ marginBottom: '1em', width: '100%' }}>
      <Link to={`/posts/${post.id}`}>
        <CardContent>
          <Typography component="div">
            <Box sx={{
              fontSize: 10, textTransform: 'uppercase', marginBottom: '1em', color: 'GrayText',
            }}
            >
              Publicado por
              { post.author }
            </Box>
            <Box sx={{ fontWeight: 'regular', color: grey[700] }}>{ post.content }</Box>
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant="outlined" startDecorator={<Favorite />} onClick={favorite}>{ starsCount }</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
