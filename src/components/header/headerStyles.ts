import { TwilightTheme } from "@/types/twilightTheme";
import { responsiveStyle } from "@/utils/responsiveStyle";
import styled from "styled-components";

export interface ButtonProps {
  $color: string;
}

export const HeaderWrapper = styled.header<TwilightTheme>`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 0 10px;
  width: 100%;
  flex-direction: row;
  background-color: ${(props) => props.$twilightTheme?.background_primary};
  color: ${(props) => props.$twilightTheme?.text_primary};
  transition: all 0.2s cubic-bezier(0.25, 0.25, 0.75, 0.75);
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  height: 80px;
  width: 80px;
  margin: 8px 0.5rem 4px 0.5em;
  ${responsiveStyle({
    mobileStyles: `font-size: 2rem;`,
    desktopStyles: `font-size: 3rem;`
  })};
`;

export const MainText = styled.h1<TwilightTheme>`
  font-weight: bold;
  color: ${(props) => props.$twilightTheme?.text_primary};
  margin: 0;
  flex-grow: 1;
  ${responsiveStyle({
    mobileStyles: `font-size: 2rem;`,
    desktopStyles: `font-size: 3rem;`
  })};

  &:hover {
    color: #ccbafe;
  }
`;

export const Button = styled.button<TwilightTheme>`
  height: 32px;
  background-color: inherit;
  outline: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => props.$twilightTheme?.text_primary};
`;

export const ThemeToggleButton = styled.button<TwilightTheme>`
  background: inherit;
  border: none;
  width: 30px;
  height: 30px;
  margin: auto 0;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.$twilightTheme?.background_gray};
  }
`;

export const ButtonGroup = styled.div`
  width: 214px;
  height: 32px;
  display: flex;
  font-size: 1.5rem;
  justify-content: flex-end;
  ${responsiveStyle({
    mobileStyles: `
      margin-right: 1.5rem;
      gap: 16px;
    `,
    desktopStyles: `
      margin-right: 2rem;
      gap: 24px;
    `
  })};

  & + & {
    padding: 20px auto 0;
  }
`;

export const MyPageWrapper = styled.div<TwilightTheme>`
  background-color: ${(props) => props.$twilightTheme?.background_primary};
`;
