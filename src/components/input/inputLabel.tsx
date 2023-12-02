import { useDarkMode } from "@/hooks/useDarkMode";
import { InputLabel } from "./inputStyle";

type InputLabel = {
  key?: string;
  labelName: string;
  labelFor?: string;
};

export const Input = ({ key, labelFor, labelName }: InputLabel) => {
  const { twilightTheme } = useDarkMode();
  const isHtmlFor = labelFor || labelName;
  return (
    <InputLabel key={key} htmlFor={isHtmlFor} $twilightTheme={twilightTheme}>
      {labelName}
    </InputLabel>
  );
};
