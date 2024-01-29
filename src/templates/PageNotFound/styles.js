import styled, { css } from 'styled-components';
import { Text } from '../../components/TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;

      ${Text} {
        margin-top: ${theme.spacings.small};
        font-size: ${theme.fonts.sizes.medium};
      }
    }
  `}
`;
