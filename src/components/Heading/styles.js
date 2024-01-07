import styled, { css } from 'styled-components';

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,

  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,

  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
  `,

  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

export const Title = styled.h1`
  ${({ theme, isdark, uppercase, size }) => css`
    color: ${isdark ? theme.colors.primaryColor : theme.colors.white};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    ${titleSizes[size](theme)}
  `}
`;
