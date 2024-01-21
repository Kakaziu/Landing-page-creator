import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, background }) => css`
    background-color: ${
      background === 1 ? theme.colors.primaryColor : theme.colors.white
    };
    color: ${background === 1 ? theme.colors.white : theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
