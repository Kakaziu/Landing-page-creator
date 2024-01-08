import SectionBackground from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          molestiae obcaecati cum doloribus dolor, repellat distinctio minima
          possimus iure nihil, id iste pariatur ducimus repellendus animi
          dolorem porro neque reprehenderit.
        </p>
      </div>
    ),
  },
};

export const Template = (args) => (
  <div>
    <SectionBackground {...args} />
  </div>
);
