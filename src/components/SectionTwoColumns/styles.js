import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      text-align: center;
    }
  `}
`;

export const Image = styled.img`
    ${({ theme }) => css`
    max-width: 700px;

    @media ${theme.media.lteMedium} {
      max-width: 100vw;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${theme.media.lteMedium} {
      flex-wrap: wrap;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.medium};
      color: ${
        background === 1 ? theme.colors.white : theme.colors.primaryColor
      }
    }
  `}
`;
