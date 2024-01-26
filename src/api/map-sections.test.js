import { mapSectionBox, mapSectionTwoColumns } from './map-sections';
import { sectionBoxMock, sectionTwoColumnsMock } from './mock';

describe('map-sections', () => {
  it('should return a predefined object when section two columns no have data', () => {
    const sectionData = mapSectionTwoColumns();

    expect(sectionData.title).toBe('');
    expect(sectionData.description).toBe('');
    expect(sectionData.altText).toBe('');
    expect(sectionData.srcImg).toBe('');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.background).toBe(false);
  });

  it('should map section two columns with correct data', () => {
    const sectionData = mapSectionTwoColumns(sectionTwoColumnsMock);

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

    expect(sectionData.title).toBe('');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.paragraphs).toEqual([]);
    expect(sectionData.background).toBe(false);
  });

  it('should map section box with correct data', () => {
    const sectionData = mapSectionBox(sectionBoxMock);

    expect(sectionData.title).toBe('Section Box');
    expect(sectionData.paragraphs[0]).toBe('paragraph');
    expect(sectionData.sectionId).toBe('vvvvvv');
    expect(sectionData.button.textButton).toBe('botao');
    expect(sectionData.background).toBe(false);
  });
});
