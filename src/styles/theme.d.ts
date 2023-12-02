interface TwilightPalette {
  background_primary: string;
  text_primary: string;
  text_secondary: string;
  background_gray: string;
  outline_gray: string;
  modal_gray: string;
}

interface SocialPalette {
  google: string;
  naver: string;
  kakao: string;
}

interface ColorPalette extends SocialPalette {
  primary: string;
  success: string;
  danger: string;
  warn: string;
}

type FontSizes = {
  lg: string;
  md: string;
  sm: string;
  xs: string;
  xxs: string;
};

type Breakpoints = {
  desktop: number;
  mobile: number;
};

type Theme = {
  colors: ColorPalette;
  fontSizes: FontSizes;
  breakpoints: Breakpoints;
};

declare const theme: Theme;
