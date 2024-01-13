import { screen } from '@testing-library/react';
import Menu from '.';
import renderTheme from '../../styles/render-theme';
import links from '../NavLink/mock';

const logoData = {
  text: 'Logo',
  link: '#target1',
};

describe('<Menu/>', () => {
  it('should render logo and nav', () => {
    const { container } = renderTheme(
      <Menu logoData={logoData} links={links} />,
    );

    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
