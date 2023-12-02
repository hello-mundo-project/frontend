import theme from "@/styles/theme";

type DeviceStyles = {
  mobileStyles: string;
  desktopStyles: string;
};

export const responsiveStyle = ({ mobileStyles, desktopStyles }: DeviceStyles): string => `
  @media screen and (min-width: ${theme.breakpoints.mobile}px) {
    ${desktopStyles}
  }

  @media screen and (max-width: ${theme.breakpoints.mobile - 1}px) {
    ${mobileStyles}
  }

  transition: all 0.2s cubic-bezier(0.25, 0.25, 0.75, 0.75);
`;
