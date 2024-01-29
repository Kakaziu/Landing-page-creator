/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { LinkContainer as Button } from '../Button/styles';

export const TextContainer = styled.div`
  ${({ theme }) => css`

    width: 50%;

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      text-align: center;
      width: 100%;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      width: 100%;
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const Image = styled.img`
    ${() => css`
    max-width: 700px;
    max-height: 500px;
  `}
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 8rem;
    gap: ${theme.spacings.medium};

    @media ${theme.media.lteMedium} {
      flex-wrap: wrap;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.medium};
      color: ${
        background === 1 ? theme.colors.white : theme.colors.primaryColor
      }
    }

    ${Button} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;
