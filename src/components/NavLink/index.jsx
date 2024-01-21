import P from 'prop-types';
import * as Styled from './styles';
import MenuLink from '../MenuLink';

const NavLink = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link) => (
        <MenuLink {...link} key={link.children} />
      ))}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};

export default NavLink;
