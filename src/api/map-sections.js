import { mapButton } from './map-button';

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
  let btn;

  const {
    __component: component = 'section.section-two-columns',
    title = '',
    description = '',
    image: {
      data: {
        attributes: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = '',
    } = '',
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;

  if (!section.button) btn = mapButton();
  else btn = mapButton(section.button);

  return {
    component,
    title,
    description,
    srcImg,
    altText,
    button: btn,
    sectionId,
    background,
  };
};

export const mapSectionBox = (section = {}) => {
  let btn;

  const {
    __component: component = 'section.section-box',
    title = '',
    paragraph: paragraphs = [],
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;

  if (!section.button) btn = mapButton();
  else btn = mapButton(section.button);

  return {
    component,
    title,
    paragraphs: paragraphs.map((paragraph) => {
      const { text = '' } = paragraph;

      return text;
    }),
    button: btn,
    sectionId,
    background,
  };
};

export const mapSectionContent = (section = {}) => {
  let btn;

  const {
    __component: component = 'section.section-content',
    title = '',
    content: [{ children: [{ text: html = '' } = ''] = '' } = ''] = '',
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;

  if (!section.button) btn = mapButton();
  else btn = mapButton(section.button);

  return {
    component,
    title,
    html,
    button: btn,
    sectionId,
    background,
  };
};

export const mapSectionGridText = (section = {}) => {
  let btn;

  const {
    title = '',
    description = '',
    text_grid: gridText = [],
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;

  if (!section.button) btn = mapButton();
  else btn = mapButton(section.button);

  return {
    component: 'section.section-grid-text',
    title,
    description,
    gridText: gridText.map((grid) => {
      const { title = '', description = '' } = grid;

      return {
        title,
        description,
      };
    }),
    button: btn,
    sectionId,
    background,
  };
};

export const mapSectionGridImage = (section = {}) => {
  let btn;

  const {
    title = '',
    description = '',
    image_grid: gridImage = [],
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;

  if (!section.button) btn = mapButton();
  else btn = mapButton(section.button);

  return {
    component: 'section.section-grid-image',
    title,
    description,
    gridImage: gridImage.map((grid) => {
      const {
        images: {
          data: [
            {
              attributes: {
                alternativeText: altText = '',
                url: srcImg = '',
              } = '',
            } = '',
          ] = '',
        } = '',
      } = grid;

      return {
        altText,
        srcImg,
      };
    }),
    button: btn,
    sectionId,
    background,
  };
};
