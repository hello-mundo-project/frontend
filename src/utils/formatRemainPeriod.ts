export function formatRemainPeriod(endDate: Date | string): string {
  const toDate = (date: Date | string): Date => (typeof date === "string" ? new Date(date) : date);
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const today = new Date();
  const targetDate = toDate(endDate);

  const daysRemaining = Math.floor((targetDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

  if (daysRemaining > 14) {
    return formatDate(targetDate);
  } else if (daysRemaining >= 2) {
    return `D-${daysRemaining}`;
  } else if (daysRemaining === 1) {
    return "D-1";
  } else if (daysRemaining === 0) {
    return "오늘 마감";
  } else {
    return "마감";
  }
}
