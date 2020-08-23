import React from "react";

import * as styles from "./style.css";

const CalendarElenent = ({ children }) => {
  return (
    <div className={styles.element}>
      <div className={styles.date}>{children}</div>
    </div>
  )
};

export default CalendarElenent;