import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

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
      sections: mapSections(sections),
      menu: mapMenu(menu),
      footerHtml,
    };
  });
};
