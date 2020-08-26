import dayjs from "dayjs";

/**
 * 月カレンダー表示用のdayjsオブジェクトの配列を作成します．
 * 日曜始まりで要素数は(月の日数を表示できる最小の段数)*7です．
 * @param {{year:number,month:number}} 
 * @return {dayjs.Dayjs[]} dayjsオブジェクトの配列
 * @example
 * const days = createCalendar({year:2020, month:8})
 */
export const createCalendar = ({ year, month }) => {
  const firstDay = getMonth({ year, month })
  const firstDayIndex = firstDay.day();

  // 最大6段必要
  const days = Array(7 * 6).fill(0).map((_, i) => {
    const diffFromFirstDay = i - firstDayIndex;
    const day = firstDay.add(diffFromFirstDay, "day");

    return day;
  });

  // 第6週がすべて次月なら削除
  if (month != days[35].month() + 1) days.length = 35
  // 第5週がすべて次月なら削除
  if (month != days[28].month() + 1) days.length = 28

  return days;
}

export const getMonth = ({ year, month }) => {
  return dayjs([year, month].join("-"))
};

export const getNextMonth = month => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = month => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};

/**
 * dayjsオブジェクトから年と月を持つオブジェクトを生成(書き方あってる？)
 * @param {dayjs.Dayjs} day 
 * @return {{year:number,month:number}}
 */
export const formatMonth = day => ({
  month: day.month() + 1,
  year: day.year()
})

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
}

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
}

export const isFirstDay = day => day.date() === 1;
