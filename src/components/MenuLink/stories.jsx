import MenuLink from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    text: 'MenuLink',
    link: 'https://www.youtube.com',
    newTab: true,
  },

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <MenuLink {...args} />
  </div>
);
