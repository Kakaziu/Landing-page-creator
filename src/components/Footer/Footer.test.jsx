import { screen } from '@testing-library/react';
import Footer from '.';
import renderTheme from '../../styles/render-theme';

describe('<Footer/>', () => {
  it('should render Footer', () => {
    const { container } = renderTheme(<Footer footerHtml={`<h1>Olá</h1>`} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
