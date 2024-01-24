export const mapButton = (button = {}) => {
  const {
    text_button: textButton = '',
    url: urlButton = '',
    size = '',
  } = button;

  return {
    textButton,
    urlButton,
    size,
  };
};
