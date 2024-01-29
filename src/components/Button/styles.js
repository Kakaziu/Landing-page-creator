import styled, { css } from 'styled-components';

const buttonSizes = {
  small: (theme) => css`
    padding: 8px 20px;
    font-size: ${theme.fonts.sizes.small};
  `,

  big: (theme) => css`
    padding: 8px 40px;
    font-size: ${theme.fonts.sizes.medium};
  `,
};

export const LinkContainer = styled.a`
  display: block;
`;

export const Button = styled.button`
  ${({ theme, size }) => css`
    font-weight: bold;
    border: none;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    border-radius: 4px;
    ${size === 'big' ? buttonSizes.big(theme) : buttonSizes.small(theme)}
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  `}

  &:hover {
    background-color: #b81132;
  }
`;
