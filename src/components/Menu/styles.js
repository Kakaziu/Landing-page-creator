import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Container as LogoLink } from '../LogoLink/styles';

const menuOnVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, menuVisible }) => css`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px 0px;
  width: 100%;
  background: ${theme.colors.white};
  transition: 0.3s;

  ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: hidden;
      opacity: 0;
      ${menuVisible && menuOnVisible()}
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    z-index: 6;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    display: none;

    @media ${theme.media.lteMedium} {
      display: block;
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

  ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      height: 42rem;
      overflow-y: auto;
      padding: ${theme.spacings.large};

      ${LogoLink} {
        margin-bottom: 3rem;
      }
    }
  `}
`;
