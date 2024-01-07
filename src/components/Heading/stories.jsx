import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
};

export const Template = (args) => (
  <div>
    <Heading {...args} />
  </div>
);
