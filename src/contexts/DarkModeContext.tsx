import React from "react";
import { Children } from "@/types/children";
import "@/styles/theme.d";
import { lightTheme, darkTheme } from "@/styles/theme";

enum ModeState {
  Light = 0,
  Dark = 1
}
type DarkModeState = {
  isDarkMode: ModeState;
  twilightTheme: TwilightPalette;
  toggleDarkMode: () => void;
};

const initialModeState: ModeState = Number(localStorage.getItem("twilight_theme") || 0);

const initialTwilightThemeState: TwilightPalette = { ...lightTheme };

const initialTwilightTheme = (): TwilightPalette => {
  return initialTwilightThemeState ? { ...darkTheme } : { ...lightTheme };
};

export const DarkModeContext = React.createContext<DarkModeState | null>({
  isDarkMode: initialModeState,
  twilightTheme: initialTwilightTheme(),
  toggleDarkMode: () => {}
});

export const DarkModeProvider = ({ children }: Children) => {
  const [isDarkMode, setDarkMode] = React.useState<ModeState>(initialModeState);

  const twilightTheme = React.useMemo(() => {
    const { background_gray, background_primary, modal_gray, outline_gray, text_primary, text_secondary } = isDarkMode
      ? lightTheme
      : darkTheme;

    return {
      background_gray,
      background_primary,
      modal_gray,
      outline_gray,
      text_primary,
      text_secondary
    };
  }, [isDarkMode]);

  /**
   * 클라이언트 스타일 상태 유지
   * 브라우저가 레이아웃을 계산하고 그리기 직전에 실행
   */
  React.useLayoutEffect(() => {
    localStorage.setItem("twilight_theme", String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === ModeState.Dark ? ModeState.Light : ModeState.Dark));
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, twilightTheme, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
