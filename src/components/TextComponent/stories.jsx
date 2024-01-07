import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'Texto de componente',
  },

  argTypes: {
    children: { type: 'string' },
  },
};

export const Light = (args) => (
  <div>
    <TextComponent {...args} />
  </div>
);

export const Dark = (args) => (
  <div>
    <TextComponent {...args} />
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
