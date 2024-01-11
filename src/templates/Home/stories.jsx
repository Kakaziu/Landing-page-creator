import Home from '.';

export default {
  title: 'Home',
  component: Home,
};

export const Template = (args) => (
  <div>
    <Home {...args} />
  </div>
);
