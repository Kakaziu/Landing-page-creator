import { mapSectionTwoColumns } from './map-sections';
import { sectionTwoColumnsMock } from './mock';

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
});
