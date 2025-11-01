/* eslint-disable @typescript-eslint/no-explicit-any */
// 🔹 Helper: get week number of the year
export const getWeekNumber = (date: Date): number => {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const pastDays = Math.floor((date.getTime() - firstDay.getTime()) / 86400000);
  return Math.ceil((pastDays + firstDay.getDay() + 1) / 7);
};

// 🔹 Helper: group and sum by key
export const groupBy = <T>(
  array: T[],
  keyFn: (item: T) => string,
  valueFn: (item: T) => number = (item: any) => (item as any).fare || 0
): Record<string, number> => {
  return array.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = (acc[key] || 0) + valueFn(item);
    return acc;
  }, {} as Record<string, number>);
};

// 🔹 Prepare daily earnings data
export const getDailyData = (rides: any[]) =>
  Object.entries(
    groupBy(rides, (r) =>
      new Date(r.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    )
  ).map(([date, earnings]) => ({
    date,
    earnings: Number((earnings * 10).toFixed(2)),
  }));

// 🔹 Prepare weekly earnings data
export const getWeeklyData = (rides: any[]) =>
  Object.entries(
    groupBy(rides, (r) => `Week ${getWeekNumber(new Date(r.createdAt))}`)
  ).map(([week, earnings]) => ({
    week,
    earnings: Number((earnings * 10).toFixed(2)),
  }));

// 🔹 Prepare monthly earnings data
export const getMonthlyData = (rides: any[]) =>
  Object.entries(
    groupBy(rides, (r) =>
      new Date(r.createdAt).toLocaleDateString("en-US", { month: "short" })
    )
  ).map(([month, earnings]) => ({
    month,
    earnings: Number((earnings * 10).toFixed(2)),
  }));
