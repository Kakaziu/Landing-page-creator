import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Roboto:wght@100;300&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Montserrat', sans-serif;
  }
`;
