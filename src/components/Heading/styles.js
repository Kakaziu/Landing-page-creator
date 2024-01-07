import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, isdark }) => css`
    color: ${isdark ? theme.colors.primaryColor : theme.colors.white}
  `}
`;
