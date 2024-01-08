import SectionContainer from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
};

export const Template = (args) => (
  <div style={{ width: '100%' }}>
    <SectionContainer {...args} />
  </div>
);
