import React from "react";
import { EditorContext } from "@/contexts/EditorContext";

export const useEditor = () => {
  const context = React.useContext(EditorContext);
  if (!context) {
    throw new Error("EditorContext must be used within a EditorProvider");
  }
  return context;
};
