import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-size: ${theme.fonts.sizes.small};
    text-decoration: none;
    display: block;
    position: relative;
    padding: ${theme.spacings.small};

    &::after {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: ${theme.colors.secondaryColor};
    transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
