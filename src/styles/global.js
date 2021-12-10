import { css } from "@emotion/react";

const GlobalStyle = (theme) => css`
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
    background-color: ${theme.palette.scroll.base};
    border-radius: 10px;
    margin-top: 5px;
  }

  /* Scroll on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.palette.scroll.hover};
  }
`;

export default GlobalStyle;
