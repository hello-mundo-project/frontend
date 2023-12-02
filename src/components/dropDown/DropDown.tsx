/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDarkMode } from "@/hooks/useDarkMode";
import { DropDownContainer, SelectContainer } from "./dropDownStyles";
import Select, { StylesConfig } from "react-select";
import { useTheme } from "styled-components";
import { DropDownType, Option } from "@/types/dropDown.d";
import { GroupData } from "@/types/postEditor.d";

export const DropDown = <T extends { _id: string; name: string }>({
  name,
  placeholder,
  options,
  isMulti = false,
  onChange
}: DropDownType<T>) => {
  const { twilightTheme } = useDarkMode();
  const theme = useTheme();

  const selectStyles: StylesConfig<Option> = {
    control: (styles) => ({
      ...styles,
      width: "105%",
      backgroundColor: twilightTheme.background_primary,
      borderColor: twilightTheme.outline_gray,
      fontSize: theme.fontSizes.xs,
      padding: "8px 4px",
      cursor: "text",
      "&:hover, &:focus-within": {
        borderColor: twilightTheme.text_primary
      }
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      fontSize: theme.fontSizes.xs,
      color: twilightTheme.text_secondary,
      background: isFocused ? theme.colors.primary : twilightTheme.background_primary,
      cursor: "pointer",
      padding: "12px 8px"
    })
  };

  const selectName = name;
  const transformedOptions: GroupData[] =
    Array.isArray(options) && options.length !== 0
      ? options.map(({ _id, name }) => ({ label: name, value: _id, name: selectName }))
      : [];

  return (
    <DropDownContainer>
      <SelectContainer>
        <Select
          key={name}
          styles={selectStyles}
          isMulti={isMulti}
          isSearchable={false}
          name={name}
          placeholder={placeholder}
          options={transformedOptions}
          onChange={onChange}
        />
      </SelectContainer>
    </DropDownContainer>
  );
};
