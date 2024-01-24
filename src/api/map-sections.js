/* eslint-disable no-unused-vars */
export const mapSections = (sections = []) => {
  return sections.map((section) => {
    const { __component: component = '' } = section;

    if (component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    } else if (component === 'section.section-box') {
      return mapSectionBox(section);
    } else if (component === 'section.section-content') {
      return mapSectionContent(section);
    } else if (component === 'section.section-grid') {
      const { text_grid: gridText = '', image_grid: gridImage = '' } = section;

      if (gridText.length > 0) return mapSectionGridText(section);

      if (gridImage > 0) return mapSectionGridImage(section);
    }
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image: {
      data: {
        attributes: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = '',
    } = '',
    button = {},
    metadata: { section_id: sectionId, background = '' } = '',
  } = section;

  return {
    component,
    title,
    description,
    srcImg,
    altText,
    button,
    sectionId,
    background,
  };
};

export const mapSectionBox = (section = {}) => {};

export const mapSectionContent = (section = {}) => {};

export const mapSectionGridText = (section = {}) => {};

export const mapSectionGridImage = (section = {}) => {};
