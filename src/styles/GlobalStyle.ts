import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { responsiveStyle } from "../utils/responsiveStyle";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Noto Sans KR', sans-serif;

    padding: 0;
    margin: 0;
    box-sizing: border-box;
    word-break: keep-all;
    text-decoration: none;
    list-style: none;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  body {
    ${(props) =>
      responsiveStyle({
        mobileStyles: `font-size: ${props.theme.fontSizes.sm};`,
        desktopStyles: `font-size: ${props.theme.fontSizes.lg};`
      })}
  }
`;

export default GlobalStyle;
