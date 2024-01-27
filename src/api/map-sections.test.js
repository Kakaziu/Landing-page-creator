import {
  mapSectionBox,
  mapSectionContent,
  mapSectionGridImage,
  mapSectionGridText,
  mapSectionTwoColumns,
  mapSections,
} from './map-sections';
import {
  gridImageMock,
  gridTextMock,
  pageData,
  sectionBoxMock,
  sectionContentMock,
  sectionTwoColumnsMock,
} from './mock';

describe('map-sections', () => {
  it('should return a empty array when no have data', () => {
    const sectionData = mapSections();

    expect(sectionData).toEqual([]);
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const WithNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(WithNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map data with correct value', () => {
    const sectionData = mapSections(pageData[0].attributes.sections);

    expect(sectionData[0].component).toBe('section.section-two-columns');
  });

  it('should return a predefined object when section two columns no have data', () => {
    const sectionData = mapSectionTwoColumns();

    expect(sectionData.component).toBe('section.section-two-columns');
    expect(sectionData.title).toBe('');
    expect(sectionData.description).toBe('');
    expect(sectionData.altText).toBe('');
    expect(sectionData.srcImg).toBe('');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.background).toBe(false);
  });

  it('should map section two columns with correct data', () => {
    const sectionData = mapSectionTwoColumns(sectionTwoColumnsMock);

    expect(sectionData.component).toBe('section.section-two-columns');
    expect(sectionData.title).toBe('Section two columns');
    expect(sectionData.description).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu porttitor augue, ut auctor sem. Cras rhoncus pellentesque ante non pharetra. Maecenas pretium consectetur sapien pellentesque rutrum. Aliquam vitae tempor purus, at rhoncus orci. Suspendisse a sem non dolor sagittis mattis.',
    );
    expect(sectionData.altText).toBe('image');
    expect(sectionData.srcImg).toBe('b.svg');
    expect(sectionData.sectionId).toBe('hero');
    expect(sectionData.background).toBe(true);
  });

  it('should return a predefined object when section box no have data', () => {
    const sectionData = mapSectionBox();

    expect(sectionData.component).toBe('section.section-box');
    expect(sectionData.title).toBe('');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.button).toEqual({
      textButton: '',
      urlButton: '',
      size: '',
    });
    expect(sectionData.paragraphs).toEqual([]);
    expect(sectionData.background).toBe(false);
  });

  it('should return empty paragraphs when paragraph is empty', () => {
    const sectionData = mapSectionBox({
      paragraph: [{}],
    });

    expect(sectionData.paragraphs[0]).toBe('');
  });

  it('should map section box with correct data', () => {
    const sectionData = mapSectionBox(sectionBoxMock);

    expect(sectionData.component).toBe('section.section-box');
    expect(sectionData.title).toBe('Section Box');
    expect(sectionData.paragraphs[0]).toBe('paragraph');
    expect(sectionData.sectionId).toBe('vvvvvv');
    expect(sectionData.button.textButton).toBe('botao');
    expect(sectionData.background).toBe(false);
  });

  it('should return a predefined object when section content no have data', () => {
    const sectionData = mapSectionContent();

    expect(sectionData.component).toBe('section.section-content');
    expect(sectionData.title).toBe('');
    expect(sectionData.html).toBe('');
    expect(sectionData.button).toEqual({
      textButton: '',
      urlButton: '',
      size: '',
    });
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.background).toBe(false);
  });

  it('should map section content with correct data', () => {
    const sectionData = mapSectionContent(sectionContentMock);

    expect(sectionData.component).toBe('section.section-content');
    expect(sectionData.title).toBe('contato');
    expect(sectionData.html).toBe('Lorem ipsum');
    expect(sectionData.button.textButton).toBe('botao');
    expect(sectionData.sectionId).toBe('contato');
    expect(sectionData.background).toBe(true);
  });

  it('should return a predefined object when section grid text no have data', () => {
    const sectionData = mapSectionGridText();
    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('section.section-grid-text');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.title).toBe('');
    expect(sectionData.description).toBe('');
    expect(sectionData.gridText).toEqual([]);
    expect(sectionData.button).toEqual({
      textButton: '',
      urlButton: '',
      size: '',
    });
  });

  it('should map gridText', () => {
    const sectionData = mapSectionGridText(gridTextMock);
    expect(sectionData.background).toBe(true);
    expect(sectionData.component).toBe('section.section-grid-text');
    expect(sectionData.sectionId).toBe('depoimentos');
    expect(sectionData.title).toBe('grid');
    expect(sectionData.description).toBe('Lorem ipsum');
    expect(sectionData.button.textButton).toBe('aaaaa');
    expect(sectionData.gridText[0].title).toBe('grid 1');
    expect(sectionData.gridText[0].description).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gittis mattis.',
    );
  });

  it('should return a predefined object when section grid image no have data', () => {
    const sectionData = mapSectionGridImage();
    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('section.section-grid-image');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.title).toBe('');
    expect(sectionData.description).toBe('');
    expect(sectionData.gridImage).toEqual([]);
    expect(sectionData.button).toEqual({
      textButton: '',
      urlButton: '',
      size: '',
    });
  });

  it('should map gridImage', () => {
    const sectionData = mapSectionGridImage(gridImageMock);
    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('section.section-grid-image');
    expect(sectionData.sectionId).toBe('grid-image');
    expect(sectionData.title).toBe('grid 2');
    expect(sectionData.description).toBe('grid 2 image');
    expect(sectionData.button.textButton).toBe('aaaaa');
    expect(sectionData.gridImage[0].altText).toBe('image');
    expect(sectionData.gridImage[0].srcImg).toBe('c.svg');
  });
});
