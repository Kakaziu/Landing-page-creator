import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Clique',
  },
};

export const Template = (args) => (
  <div>
    <Button {...args} />
  </div>
);
