import { mapButton } from './map-button';

describe('map-button', () => {
  it('should return a predefined object when have no data', () => {
    const buttonData = mapButton();

    expect(buttonData.children).toBe('');
    expect(buttonData.urlButton).toBe('');
    expect(buttonData.size).toBe('');
  });

  it('should return a predefined object when have no data', () => {
    const buttonData = mapButton({
      id: 4,
      text_button: 'botao',
      url: '#',
      size: 'big',
    });

    expect(buttonData.children).toBe('botao');
    expect(buttonData.urlButton).toBe('#');
    expect(buttonData.size).toBe('big');
  });
});
