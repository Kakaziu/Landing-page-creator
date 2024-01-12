import { screen } from '@testing-library/react';
import LogoLink from '.';
import renderTheme from '../../styles/render-theme';

describe('<LogoLink/>', () => {
  it('should render no image logo', () => {
    renderTheme(<LogoLink text="Logo" link="#" />);

    const logo = screen.getByText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render with image', () => {
    renderTheme(
      <LogoLink text="Logo" link="#" srcImg="./assets/images/logo.webp" />,
    );

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render with correct link', () => {
    renderTheme(
      <LogoLink text="Logo" link="#" srcImg="./assets/images/logo.webp" />,
    );

    const logo = screen.getByAltText('Logo');
    expect(logo.parentElement).toHaveAttribute('href', '#');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="LogoLink" link="#target" />,
    );

    expect(container).toMatchSnapshot();
  });
});
