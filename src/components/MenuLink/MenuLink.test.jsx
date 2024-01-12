import { screen } from '@testing-library/react';
import MenuLink from '.';
import renderTheme from '../../styles/render-theme';

describe('<MenuLink/>', () => {
  it('should render link', () => {
    const { debug } = renderTheme(
      <MenuLink link="http://localhost">oi</MenuLink>,
    );
    const link = screen.getByRole('link', { name: 'oi' });

    expect(link).toHaveAttribute('target', '_self');
    debug();
  });

  it('should render link open in new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost:3000" open_in_new_tab={false}>
        oi
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'oi' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
});
