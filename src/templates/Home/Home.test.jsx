import Home from '.';
import renderTheme from '../../styles/render-theme';

describe('render <Home />', () => {
  it('should render home', () => {
    const { container } = renderTheme(<Home />);

    expect(container).toMatchSnapshot();
  });
});
