import renderTheme from '../../styles/render-theme';
import NavLink from '.';
import links from './mock';
import { screen } from '@testing-library/react';

describe('<NavLink/>', () => {
  it('should render all links', () => {
    renderTheme(<NavLink links={links} />);

    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLink />);

    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLink links={links} />);

    expect(container).toMatchSnapshot();
  });
});
