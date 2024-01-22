import { mapData } from './map-data';
import mock from './mock';

describe('map-data', () => {
  it('should return a predifined data when no have data', () => {
    const pageData = mapData()[0];

    expect(pageData.title).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.sections).toEqual([]);
    expect(pageData.menu).toEqual({});
    expect(pageData.footerHtml).toBe('');
  });

  it('should return correct data', () => {
    const pageData = mapData(mock)[0];

    expect(pageData.title).toBe('Página 1');
    expect(pageData.slug).toBe('page-1');
    expect(pageData.footerHtml).toBe('footer');
  });
});
