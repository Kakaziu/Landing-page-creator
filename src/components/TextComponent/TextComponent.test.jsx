import TextComponent from '.';
import renderTheme from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render Text component', () => {
    renderTheme(<TextComponent>oi</TextComponent>);
  });
});
