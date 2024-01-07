import styled, { css } from 'styled-components';

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
  `}
`;
