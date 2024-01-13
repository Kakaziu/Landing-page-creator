import P from 'prop-types';
import LogoLink from '../LogoLink';
import NavLink from '../NavLink';
import SectionContainer from '../SectionContainer';
import * as Styled from './styles';
import { MdClose, MdMenu } from 'react-icons/md';
import { useState } from 'react';
import { theme } from '../../styles/theme';

const Menu = ({ links = [], logoData }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Styled.Button onClick={() => setMenuVisible(!menuVisible)}>
        {menuVisible ? (
          <MdClose size="35" color={theme.colors.primaryColor} />
        ) : (
          <MdMenu size="35" color={theme.colors.primaryColor} />
        )}
      </Styled.Button>
      <Styled.Container menuVisible={menuVisible}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLink links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

export default Menu;