import NewPostForm from '../components/NewPostForm';
import { PostContext } from '../contexts/PostContext';

export default {
  component: NewPostForm,
  decorators: [
    (Story) => (
      <PostContext.Provider value={{ createPost: () => {} }}>
        <Story />
      </PostContext.Provider>
    ),
  ],
};

export const Default = {};
