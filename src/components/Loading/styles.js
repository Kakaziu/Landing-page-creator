import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
