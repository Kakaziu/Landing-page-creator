import { screen } from '@testing-library/react';
import SectionTwoColumns from '.';
import renderTheme from '../../styles/render-theme';
import mock from './mock';

describe('<SectionTwoColumns/>', () => {
  it('should render gridTwoColumns', () => {
    const { container } = renderTheme(<SectionTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should title render with white color when background is activated', () => {
    renderTheme(<SectionTwoColumns {...mock} background />);
    expect(
      screen.getByRole('heading', { name: 'Grid two columns' }),
    ).toHaveStyle({
      color: 'rgb(255, 255, 255)',
    });
  });
});
