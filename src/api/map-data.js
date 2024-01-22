export const mapData = (pagesData = [{}]) => {
  return pagesData.map((page) => {
    let dataAttributes = page.attributes;

    const {
      title = '',
      slug = '',
      sections = [],
      menu = {},
      footer_text: [
        { children: [{ text: footerHtml = '' } = ''] = '' } = '',
      ] = '',
    } = dataAttributes ? dataAttributes : page;

    return {
      title,
      slug,
      sections,
      menu,
      footerHtml,
    };
  });
};
