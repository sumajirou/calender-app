import Navigation from './presentation';
import { connect } from 'react-redux';
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth
} from '../../services/calendar';

import { calendarSetMonth } from '../../redux/calendar/actions';

// storeからどのstateを引っ張ってくるか
const mapStateToProps = ({ calendar }) => ({ calendar });

// どんなdispatcherをpropsに渡すか
// ここではsetMonthがcalendarSetMonthアクションをdispatchしている(?)
const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calendarSetMonth(month))
  }
});

// mapStateToPropsで生成されたpropsとmapDispatchToPropsで生成されたpropsを引数にとり，
// コンポーネントで使う形に整形して渡す関数
// ここではmonth, setNextMonth, setPreviousMonth, setMonthがNavigationのプロパティになる．
// monthはstoreからとってきたただの値．
// set.*Monthは内部でアクションを呼ぶ関数．
const mergeProps = ({ calendar }, { setMonth }) => ({
  month: getMonth(calendar),
  setNextMonth: () => {
    const nextMonth = getNextMonth(calendar);
    setMonth(nextMonth)
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(calendar);
    setMonth(previousMonth)
  },
  setMonth: day => {
    const month = formatMonth(day);
    setMonth(month)
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
