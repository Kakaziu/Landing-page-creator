import styled, { css } from 'styled-components';

export const Text = styled.p`
  ${({ theme, isdark }) => css`
    color: ${isdark ? theme.colors.primaryColor : theme.colors.white};
  `}
`;
