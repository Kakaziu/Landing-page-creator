import { mapMenu } from './map-menu';
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
});
