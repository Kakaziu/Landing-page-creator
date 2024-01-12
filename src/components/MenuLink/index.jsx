import P from 'prop-types';
import * as Styled from './styles';

const MenuLink = ({ text, link, open_in_new_tab = false }) => {
  return (
    <Styled.Link href={link} target={open_in_new_tab ? '_self' : '_blank'}>
      {text}
    </Styled.Link>
  );
};

MenuLink.propTypes = {
  text: P.string.isRequired,
  link: P.string.isRequired,
  open_in_new_tab: P.bool,
};

export default MenuLink;
