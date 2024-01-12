import LogoLink from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: './assets/images/logo.webp',
    link: 'http://localhost',
  },
};

export const ImageOnly = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
);

export const TextOnly = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
);

TextOnly.args = {
  srcImg: '',
};
