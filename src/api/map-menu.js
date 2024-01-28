export const mapMenu = (menu = {}) => {
  const {
    logo_title: logoTitle = '',
    logo_link: link = '',
    menu_links: links = [],
  } = menu;

  let srcImg =
    menu.image_logo && menu.image_logo.data
      ? menu.image_logo.data.attributes.url
      : '';

  return {
    logoTitle,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((linkObj) => {
    const {
      text: children = '',
      url: link = '',
      open_in_new_tab: newTab = false,
    } = linkObj;

    return {
      children,
      link,
      newTab,
    };
  });
};
