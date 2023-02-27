import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .big-heading {
    margin: 0;
    font-size: clamp(40px, 7vw, 80px);
  }

  .section-title {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    white-space: nowrap;

    &:after {
      content: '';
      display: block;
      position: relative;
      width: 100%;
      height: 1px;
      margin-left: 20px;
      opacity: 0.3;
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
`;

export default GlobalStyle;
