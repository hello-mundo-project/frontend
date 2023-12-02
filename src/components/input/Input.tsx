import { useDarkMode } from "@/hooks/useDarkMode";
import { InputBar } from "./inputStyle";

type Input = {
  name: string;
  placeholder: string;
  value: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ name, placeholder, value, onChange }: Input) => {
  const { twilightTheme } = useDarkMode();
  console.log(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  return (
    <InputBar
      key={name || ""}
      name={name || ""}
      placeholder={placeholder}
      autoComplete="off"
      $twilightTheme={twilightTheme}
      value={value || ""}
      onChange={handleChange}
    />
  );
};
