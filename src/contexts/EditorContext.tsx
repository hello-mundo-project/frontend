import React from "react";
import { dayjsFormattedDate, now } from "@/utils/day";
import { Children } from "@/types/children";
import { InputProps, DateProps, handleEditorProps, GroupDropDownProps, EditorProps } from "@/types/postEditor.d";

const initialState = {
  deadline: now.add(14, "day").format("YYYY-MM-DD"),
  contact: "",
  duration: 0,
  content: "<b>프로젝트 소개 작성.</b>"
};

type EditorContextType = {
  editorData: EditorProps;
  dispatch: (data: handleEditorProps) => void;
};

export const EditorContext = React.createContext<EditorContextType | null>({
  editorData: initialState,
  dispatch: () => {}
});

const reducer = (state: EditorProps, action: handleEditorProps) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      const { name, value } = action.payload as InputProps;
      console.log(name, value);
      return {
        ...state,
        [name]: value
      };
    }
    case "DATE_CHANGE": {
      const { date } = action.payload as DateProps;
      return {
        ...state,
        deadline: dayjsFormattedDate(date)
      };
    }
    case "DROPDOWN_CHANGE": {
      const { name, value } = action.payload as InputProps;
      return {
        ...state,
        [name]: value
      };
    }
    case "GROUP_DROPDOWN_CHANGE": {
      const { data, name } = action.payload as GroupDropDownProps;
      const updatedArray = data?.length > 0 ? data.map((item) => item.value) : [];
      return {
        ...state,
        [name]: updatedArray
      };
    }
    case "CLEAR_CONTEXT":
      return initialState;
    default:
      return state;
  }
};

export const EditorProvider: React.FC<Children> = ({ children }) => {
  const [editorData, dispatch] = React.useReducer(reducer, initialState);
  return <EditorContext.Provider value={{ editorData, dispatch }}>{children}</EditorContext.Provider>;
};
