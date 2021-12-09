import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Scroll Width */
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /* Scroll Track */
  ::-webkit-scrollbar-track {
    background: "inherit";
  }

  /* Scroll Handle */
  ::-webkit-scrollbar-thumb {
    background: #686868;
    border-radius: 10px;
    margin-top: 5px;
  }

  /* Scroll on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #7b7b7b;
  }
`;

export default GlobalStyle;
