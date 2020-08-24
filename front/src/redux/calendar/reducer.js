import dayjs from "dayjs";

import { CALENDAR_SET_MONTH, calendarSetMonth } from "./actions";

const day = dayjs();

// 初期state
const init = {
  year: day.year(),
  month: day.month() + 1
};

const calendarReducer = (state = init, { type, payload }) => {
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calendarReducer;