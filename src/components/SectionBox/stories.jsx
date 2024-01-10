import SectionBox from '.';
import mock from './mock';

export default {
  title: 'SectionBox',
  component: SectionBox,
  args: mock,
};

export const Template = (args) => (
  <div>
    <SectionBox {...args} />
  </div>
);
