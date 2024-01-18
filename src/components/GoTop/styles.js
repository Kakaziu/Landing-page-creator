import styled, { css } from 'styled-components';

export const Button = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(10, 18, 40, 0.5);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.primaryColor};
    }
  `}
`;
