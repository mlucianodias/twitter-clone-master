import PrimaryButton from '../components/PrimaryButton';

export default {
  component: PrimaryButton,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Hello',
  },
};

export const Primary = {
  args: {
    label: 'Hello',
    variant: 'outlined',
    size: 'md',
  },
};

export const PrimarySolid = {
  args: {
    label: 'Hello',
    variant: 'solid',
    size: 'md',
  },
};
