import { screen } from '@testing-library/react';
import Heading from '.';
import renderTheme from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render heading with default values', () => {
    renderTheme(<Heading>Oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'Oi' });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.large,
      'text-transform': 'none',
    });
  });

  it('should content be white when background dark', () => {
    renderTheme(<Heading isdark={false}>Oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'Oi' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render with small size', () => {
    renderTheme(<Heading size="small">Oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'Oi' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should render with big size', () => {
    renderTheme(<Heading size="big">Oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'Oi' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xxlarge,
    });
  });

  it('should render with huge size', () => {
    renderTheme(<Heading size="huge">Oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'Oi' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'Oi' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render with correct heading type', () => {
    const { container } = renderTheme(<Heading as="h6">Oi</Heading>);
    const heading = container.querySelector('h6');

    expect(heading.tagName.toLowerCase()).toBe('h6');
  });

  it('should decrease font size when screen is smaller', () => {
    renderTheme(<Heading size="huge">Oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'Oi' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);

    expect(container).toMatchSnapshot();
  });
});
