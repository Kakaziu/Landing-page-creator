import Button from '.';
import renderTheme from '../../styles/render-theme';

describe('<Button />', () => {
  it('should render button', () => {
    renderTheme(<Button>oi</Button>);
  });
});
