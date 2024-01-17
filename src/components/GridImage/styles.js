import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      margin-bottom: ${theme.spacings.small};
    }

    img {
      width: 100%;
      transition: all 300ms ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacings.xlarge};
  margin-top: ${theme.spacings.huge};
  width: 100%;

  @media ${theme.media.lteMedium} {
    grid-template-columns: 1fr;
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