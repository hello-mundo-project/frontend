import dayjs, { Dayjs } from "dayjs";

type DayjsToString = {
  (dayjs: Dayjs): string;
};

type DateToString = {
  (date: Date): string;
};

export const now: Dayjs = dayjs();
export const formatNow: string = now.format();

export const dayjsFormattedDateTime: DayjsToString = (dateTime) => dateTime.format("YYYY-MM-DD HH:mm:ss");
export const dayjsFormattedDate: DayjsToString = (date) => date.format("YYYY-MM-DD");
export const dayjsFormattedTime: DayjsToString = (time) => time.format("HH:mm:ss");

export const dateFormattedDateTime: DateToString = (dateTime) => dayjs(dateTime).format("YYYY-MM-DD HH:mm:ss");
export const dateFormattedDate: DateToString = (date) => dayjs(date).format("YYYY-MM-DD");
export const dateFormattedTime: DateToString = (time) => dayjs(time).format("HH:mm:ss");

export const defaultDate: Dayjs = dayjs(now.add(14, "day").format("YYYY-MM-DD"));
export const minimizeDate: Dayjs = dayjs(now.format("YYYY-MM-DD"));
