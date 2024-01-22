import { mapMenu } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object when have no data', () => {
    const menuData = mapMenu();

    expect(menuData.logoTitle).toBe('');
    expect(menuData.link).toBe('');
    expect(menuData.srcImg).toBe('');
    expect(menuData.links).toEqual([]);
  });
});
