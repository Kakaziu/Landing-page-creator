import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
};

export const Template = (args) => (
  <div style={{ height: '110vh' }}>
    <GoTop {...args} />
  </div>
);
