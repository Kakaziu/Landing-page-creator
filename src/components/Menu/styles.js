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
  padding: 10px 0px;
  width: 100%;
  background: ${theme.colors.white};
  transition: 0.3s;
  overflow-y: auto;

  ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    ${LogoLink} {
        margin-bottom: 3rem;
        justify-content: center;
      }

    @media ${theme.media.lteMedium} {
      top: 0;
      left: 0;
      right: 0;
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
    position: fixed;
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
    align-items: center;

  ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      justify-content: center;
      height: 42rem;
      overflow-y: auto;
      padding: ${theme.spacings.large};
      width: 100%;

      &::-webkit-scrollbar {
        width: 5px
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.primaryColor};
        border-radius: 50px;
      }
    }
  `}
`;
