import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .big-heading {
    margin: 0;
    font-size: clamp(40px, 7vw, 80px);
  }
`;

export default GlobalStyle;
