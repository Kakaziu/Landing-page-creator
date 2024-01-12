import P from 'prop-types';
import * as Styled from './styles';

const MenuLink = ({ children, link, open_in_new_tab = true }) => {
  return (
    <Styled.Link href={link} target={open_in_new_tab ? '_self' : '_blank'}>
      {children}
    </Styled.Link>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  open_in_new_tab: P.bool,
};

export default MenuLink;
