import { mapButton } from './map-button';

describe('map-button', () => {
  it('should return a predefined object when have no data', () => {
    const buttonData = mapButton();

    expect(buttonData.textButton).toBe('');
    expect(buttonData.urlButton).toBe('');
    expect(buttonData.size).toBe('');
  });
});
