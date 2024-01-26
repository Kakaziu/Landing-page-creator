import {
  mapSectionBox,
  mapSectionContent,
  mapSectionGridText,
  mapSectionTwoColumns,
} from './map-sections';
import {
  gridTextMock,
  sectionBoxMock,
  sectionContentMock,
  sectionTwoColumnsMock,
} from './mock';

describe('map-sections', () => {
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
});
