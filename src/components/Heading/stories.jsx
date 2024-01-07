import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Olá mundo',
    isdark: true,
  },

  argTypes: {
    children: { type: 'string' },
  },

  parameters: {
    background: {
      default: 'light',
    },
  },
};

export const Light = (args) => (
  <div>
    <Heading {...args} />
  </div>
);

export const Dark = (args) => (
  <div>
    <Heading {...args} />
  </div>
);

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Dark.args = {
  isdark: false,
};
