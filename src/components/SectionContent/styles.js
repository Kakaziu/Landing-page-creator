import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { LinkContainer as Button } from '../Button/styles';

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
  margin: 8rem 0;

  ${HeadingContainer} {
      margin-bottom: ${theme.spacings.small};
      color: ${
        background === 1 ? theme.colors.white : theme.colors.primaryColor
      }
    }

    ${Button} {
      margin-top: ${theme.spacings.medium};
      text-align: center;
    }
  `}
`;
