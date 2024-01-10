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

    > ${Title} {
      margin-bottom: ${theme.spacings.medium};
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
