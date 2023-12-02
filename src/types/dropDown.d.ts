export type DropDownType<T> = {
  name: string;
  placeholder: string;
  options?: T[];
  isMulti?: boolean;
  onChange: (newValue: SingleValue<Option> | MultiValue<Option>, actionMeta: ActionMeta<Option>) => void;
};

export type GroupDropDownType<T> = {
  name: string;
  placeholder: string;
  options?: T[];
  onChange: (newValue: SingleValue<Option> | MultiValue<Option>, actionMeta: ActionMeta<Option>) => void;
};

export type Option = {
  value: string;
  label: string;
  name?: string;
};
