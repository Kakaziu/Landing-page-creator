import { mapMenu, mapMenuLinks } from './map-menu';
import { dataMenu } from './mock';

describe('map-menu', () => {
  it('should return a predefined object when have no data', () => {
    const menuData = mapMenu();

    expect(menuData.logoTitle).toBe('');
    expect(menuData.link).toBe('');
    expect(menuData.srcImg).toBe('');
    expect(menuData.links).toEqual([]);
  });

  it('should map menu to match keys and values required', () => {
    const menuData = mapMenu(dataMenu);

    expect(menuData.logoTitle).toBe('logo');
    expect(menuData.link).toBe('#');
    expect(menuData.srcImg).toBe('a.svg');
  });

  it('should return a empty array when have no data', () => {
    const linksData = mapMenuLinks();
    expect(linksData).toEqual([]);
  });

  it('should test links with invalid data', () => {
    const linksData = mapMenuLinks([{}])[0];

    expect(linksData.newTab).toBe(false);
    expect(linksData.text).toBe('');
    expect(linksData.url).toBe('');
  });
});
