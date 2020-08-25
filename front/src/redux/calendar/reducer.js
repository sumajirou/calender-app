import dayjs from "dayjs";

import { CALENDAR_SET_MONTH } from "./actions";

import { formatMonth } from '../../services/calendar';

const day = dayjs();

// 初期state
const init = formatMonth(day);

const calendarReducer = (state = init, { type, payload }) => {
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calendarReducer;