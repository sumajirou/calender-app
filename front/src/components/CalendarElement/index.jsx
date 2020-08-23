import React from "react";

import * as styles from "./style.css";

import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

import {
  isSameMonth,
  isFirstDay,
  isSameDay
} from "../../services/calendar";

const CalendarElenent = ({ day, row }) => {
  const today = dayjs();

  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  const format = isFirstDay(day) ? "M月D日" : "D";

  const isToday = isSameDay(day, today);

  // カレンダーの段数をElenetの高さに反映させる
  let elementHeight = styles.element_6rows;
  if (row === 5) elementHeight = styles.element_5rows;
  if (row === 4) elementHeight = styles.element_4rows;

  return (
    <div className={[styles.element, elementHeight].join(' ')}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  )
};

export default CalendarElenent;