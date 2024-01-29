export const mapButton = (button = {}) => {
  const { text_button: children = '', url: urlButton = '', size = '' } = button;

  return {
    children,
    urlButton,
    size,
  };
};
