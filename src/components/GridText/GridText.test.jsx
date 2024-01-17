import GridText from '.';
import mock from './mock';
import renderTheme from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<GridText/>', () => {
  it('should render grids', () => {
    renderTheme(<GridText {...mock} />);

    expect(screen.getAllByRole('heading', { name: /teste/i })).toHaveLength(
      mock.grid.length,
    );
  });

  it('should not render grids', () => {
    renderTheme(<GridText />);

    expect(screen.queryAllByRole('heading', { name: /teste/i })).toHaveLength(
      0,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridText {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
