import dayjs from "dayjs";

export const createCalendar = () => {
  const firstDay = dayjs().startOf("month");

  const month = firstDay.month();
  const firstDayIndex = firstDay.day();

  // 最大6段必要
  let days = Array(7 * 6).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;
    const day = firstDay.add(diffFromFirstDay, "day");

    return day;
  });

  // 第6週がすべて次月なら削除
  if (month != days[35].month()) days.length = 35
  // 第5週がすべて次月なら削除
  if (month != days[28].month()) days.length = 28

  return days;
}

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
}

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
}

export const isFirstDay = day => day.date() === 1;
