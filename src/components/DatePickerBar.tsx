import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Dayjs } from "dayjs";
import { minimizeDate, defaultDate } from "@/utils/day";

type DatePickerBar = {
  onChange: (newValue: Dayjs) => void;
};

export const DatePickerBar = ({ onChange }: DatePickerBar) => {
  const { twilightTheme } = useDarkMode();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={{ monthShort: "M" }}>
      <DatePicker
        onChange={(newValue) => onChange(newValue!)}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            color: twilightTheme.text_primary,
            bgcolor: twilightTheme.background_primary,
            "& fieldset": {
              border: "none",
              borderColor: twilightTheme.outline_gray
            },
            "&:hover fieldset": {
              border: `1px solid`,
              borderColor: twilightTheme.text_primary
            },
            "&.Mui-focused fieldset": {
              border: `1px solid`,
              borderColor: twilightTheme.text_primary
            }
          },
          "& .MuiInputBase-root": {
            border: `1px solid ${twilightTheme.outline_gray}`,
            color: twilightTheme.text_secondary
          },
          "& .MuiSvgIcon-root": {
            color: twilightTheme.text_secondary
          }
        }}
        views={["year", "month", "day"]}
        format="YYYY-MM-DD"
        showDaysOutsideCurrentMonth
        minDate={minimizeDate}
        defaultValue={defaultDate}
      />
    </LocalizationProvider>
  );
};
