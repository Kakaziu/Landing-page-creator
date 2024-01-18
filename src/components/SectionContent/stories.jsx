import SectionContent from '.';
import mock from './mock';

export default {
  title: 'SectionContent',
  component: SectionContent,
  args: mock,
};

export const Template = (args) => (
  <div>
    <SectionContent {...args} />
  </div>
);
