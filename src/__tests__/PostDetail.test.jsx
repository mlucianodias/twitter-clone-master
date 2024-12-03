import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { PostDetail, postLoader } from './PostDetail';

describe('PostDetail Component', () => {
  it('renders the details of a post correctly', async () => {
    // Mock data simulado pelo loader
    const mockPost = {
      id: 1,
      author: 'John Doe',
      content: 'This is a detailed post content',
    };

    // Mock do loader e da rota
    const routes = [
      {
        path: '/posts/:id',
        element: <PostDetail />,
        loader: () => Promise.resolve({ post: mockPost }),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/posts/1'],
    });

    // Renderizar o componente com o roteador mockado
    render(<RouterProvider router={router} />);

    // Esperar e verificar se os detalhes do post são renderizados corretamente
    expect(await screen.findByText(/Publicado por John Doe/i)).toBeInTheDocument();
    expect(await screen.findByText(mockPost.content)).toBeInTheDocument();
  });
});
