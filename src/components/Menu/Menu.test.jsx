import { fireEvent, screen } from '@testing-library/react';
import Menu from '.';
import renderTheme from '../../styles/render-theme';
import links from '../NavLink/mock';
import { theme } from '../../styles/theme';

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

  it('should open and close menu mobile when click in menu button', () => {
    renderTheme(<Menu logoData={logoData} links={links} />);

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'block', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('visibility', 'hidden', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('visibility', 'visible', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('visibility', 'hidden', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);

    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });
});
