import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    text-decoration: none;
    font-size: ${theme.fonts.sizes.medium};
    display: flex;
    align-items: center;

    > img {
      width: 20rem
    }
  `}
`;
