import Menu from '.';
import links from '../NavLink/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: links,
    logoData: {
      text: 'logo',
      srcImg: '',
      link: '#target',
    },
  },

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <Menu {...args} />
  </div>
);
