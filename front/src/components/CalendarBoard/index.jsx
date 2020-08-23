import React from "react";
import CalendarElement from "../CalendarElement";
import { GridList } from "@material-ui/core";

import * as styles from "./style.css";

import dayjs from "dayjs";
import "dayjs/locale/ja";
import CalendarElenent from "../CalendarElement";

dayjs.locale("ja");

const createCalendar = () => {
  const firstDay = dayjs().startOf("month");
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
}

const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElenent>
              {c.date() == 1 ? c.format("M/D") : c.format("D")}
            </CalendarElenent>
          </li>
        ))}
      </GridList>
    </div>
  )
}

export default CalendarBoard;