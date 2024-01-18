import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      margin-bottom: ${theme.spacings.small};
      text-align: center;
    }
  `}
`;

export const HtmlContainer = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    text-align: center;

    p {
      margin-top: ${theme.spacings.medium}
    }
  `}
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
  ${HeadingContainer} {
      margin-bottom: ${theme.spacings.small};
      color: ${background ? theme.colors.white : theme.colors.primaryColor}
    }
  `}
`;
