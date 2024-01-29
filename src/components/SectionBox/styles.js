import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Text } from '../TextComponent/styles';
import { LinkContainer as Button } from '../Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 8rem;

    > ${Title} {
      margin-bottom: ${theme.spacings.small};
    }

    > ${Text} {
      margin-top: ${theme.spacings.small};
      text-align: center;
    }

    > ${Button} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;
