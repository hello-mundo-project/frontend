import { Dayjs } from "dayjs";

export type EditorActionTypes =
  | "INPUT_CHANGE"
  | "DATE_CHANGE"
  | "DROPDOWN_CHANGE"
  | "GROUP_DROPDOWN_CHANGE"
  | "CLEAR_CONTEXT";

export type InputProps = { name: string; value: string };
export type DateProps = { date: Dayjs };
export type GroupData = { name: string; value: string; label: string };
export type GroupDropDownProps = { data: GroupData[]; name: string };
export type EditorPayloadProps = InputProps | DateProps | GroupDropDownProps;
export type handleEditorProps = { type: EditorActionTypes; payload?: EditorPayloadProps };

export type EditorProps = {
  category?: string;
  headcount?: number;
  duration: string | number;
  deadline: string | number;
  expected_date?: Date | string;
  progress_way?: string;
  contact: string;
  skill_id?: string[];
  career_id?: string[];
  title?: string;
  content?: string;
};
