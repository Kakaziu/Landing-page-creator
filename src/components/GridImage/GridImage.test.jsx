import { screen } from '@testing-library/react';
import GridImage from '.';
import renderTheme from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<GridImage/>', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} background />);
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.primaryColor,
    });
  });

  it('should render without background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);

    expect(container.firstChild).toHaveStyle({
      background: theme.colors.white,
    });
  });

  it('should not render grid when no have grid', () => {
    renderTheme(<GridImage />);

    expect(screen.queryAllByAltText(/teste/i)).toHaveLength(0);
  });
});
