import "./theme.d";

export const lightTheme: TwilightPalette = {
  background_primary: "#FFFFFF",
  text_primary: "#0F0F0F",
  text_secondary: "#606060",
  background_gray: "rgba(0, 0, 0, 0.05)",
  outline_gray: "rgba(0, 0, 0, 0.1)",
  modal_gray: "rgba(0, 0, 0, 0.2)"
};

export const darkTheme: TwilightPalette = {
  background_primary: "#0F0F0F",
  text_primary: "#FFFFFF",
  text_secondary: "#AAAAAA",
  background_gray: "rgba(255, 255, 255, 0.1)",
  outline_gray: "rgba(255, 255, 255, 0.2)",
  modal_gray: "rgba(255, 255, 255, 0.3)"
};

const colors: ColorPalette = {
  primary: "#04D98B",
  success: "#4ED17E",
  danger: "#EF4444",
  warn: "#EEC239",
  google: "#F45A5C",
  naver: "#03c75a",
  kakao: "#fae100"
};

const fontSizes: FontSizes = {
  lg: "28px",
  md: "24px",
  sm: "20px",
  xs: "16px",
  xxs: "12px"
};

/** 사용자 기기에 따른 화면 변환 시점 */
const breakpoints: Breakpoints = {
  desktop: 1024,
  mobile: 768
};

const theme: Theme = {
  colors,
  fontSizes,
  breakpoints
};

export default theme;
