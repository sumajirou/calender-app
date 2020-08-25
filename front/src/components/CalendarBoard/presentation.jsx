import React from "react";
import {
  GridList,
  Typography
} from "@material-ui/core";

import CalendarElenent from "../CalendarElement";

import * as styles from "./style.css";


const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month }) => {
  // カレンダーの段数
  const row = calendar.length / 7
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map(d => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElenent day={c} month={month} row={row} />
          </li>
        ))}
      </GridList>
    </div>
  )
}

export default CalendarBoard;