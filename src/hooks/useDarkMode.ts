import React from "react";
import { DarkModeContext } from "@/contexts/DarkModeContext";

export const useDarkMode = () => {
  const context = React.useContext(DarkModeContext);
  if (!context) {
    throw new Error("Fail to change dark mode");
  }
  return context;
};
