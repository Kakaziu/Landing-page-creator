import { screen } from '@testing-library/react';
import Button from '.';
import renderTheme from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Button />', () => {
  it('should render with default size', () => {
    renderTheme(<Button>oi</Button>);

    const button = screen.getByText('oi');

    expect(button).toHaveStyle({
      padding: '8px 20px',
      'font-size': theme.fonts.sizes.small,
    });
  });

  it('should render with big size', () => {
    renderTheme(<Button size="big">oi</Button>);

    const button = screen.getByText('oi');

    expect(button).toHaveStyle({
      padding: '8px 40px',
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should render with correct url', () => {
    renderTheme(<Button>oi</Button>);

    const link = screen.getByText('oi').parentElement;

    expect(link).toHaveAttribute('href', '#');
  });
});
