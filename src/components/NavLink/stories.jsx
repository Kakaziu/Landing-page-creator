import NavLink from '.';
import links from './mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: links,
  },
  argType: {
    links: { type: '' },
  },
};

export const Template = (args) => (
  <div>
    <NavLink {...args} />
  </div>
);
