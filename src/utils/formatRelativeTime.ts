export function formatRelativeTime(createdAt: Date | string): string {
  const targetDate: Date = typeof createdAt === "string" ? new Date(createdAt) : createdAt;
  const timeDifference: number = Date.now() - targetDate.getTime();

  const timeUnits: { unit: number; label: string }[] = [
    { unit: 60 * 1000, label: "분" },
    { unit: 60 * 60 * 1000, label: "시간" },
    { unit: 24 * 60 * 60 * 1000, label: "일" },
    { unit: 30 * 24 * 60 * 60 * 1000, label: "달" },
    { unit: 365 * 24 * 60 * 60 * 1000, label: "년" }
  ];

  for (const { unit, label } of timeUnits) {
    if (timeDifference < unit) {
      const timeAgo: number = Math.floor(timeDifference / unit);
      return timeAgo === 0 ? "0분 전" : `${timeAgo}${label} 전`;
    }
  }

  const yearsAgo: number = Math.floor(timeDifference / timeUnits[timeUnits.length - 1].unit);
  return `${yearsAgo}년 전`;
}
