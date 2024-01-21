import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://google.com">Feito por Kauã</a></p>`,
  },
};

export const Template = (args) => (
  <div>
    <Footer {...args} />
  </div>
);
