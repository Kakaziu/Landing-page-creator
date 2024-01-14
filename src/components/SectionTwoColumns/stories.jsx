import SectionTwoColumns from '.';
import mock from './mock';

export default {
  title: 'SectionTwoColumns',
  component: SectionTwoColumns,
  args: mock,
};

export const Template = (args) => (
  <div>
    <SectionTwoColumns {...args} />
  </div>
);
