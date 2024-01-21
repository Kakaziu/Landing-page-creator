import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${theme.colors.mediumGray};
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small};

    a {
      color: ${theme.colors.primaryColor};
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }

    & ${SectionContainer} {
      padding: ${theme.spacings.small} 0;
    }
  `}
`;
