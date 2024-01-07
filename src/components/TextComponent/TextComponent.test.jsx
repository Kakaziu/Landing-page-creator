import { screen } from '@testing-library/react';
import TextComponent from '.';
import renderTheme from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render with correct children', () => {
    renderTheme(<TextComponent>alou</TextComponent>);
    const text = screen.getByText('alou');

    expect(text).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>alou</TextComponent>);

    expect(container).toMatchSnapshot();
  });
});
