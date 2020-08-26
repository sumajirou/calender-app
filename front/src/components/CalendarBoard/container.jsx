import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from '../../services/calendar';

// storeからどのstateを引っ張ってくるか
// const mapStateToProps = state => ({ calendar: state.calendar });
const mapStateToProps = ({ calendar }) => ({ calendar });

// どんなdispatcherをpropsに渡すか
// ここではdispatcherが不要なのでからっぽ
const mapDispatchToProps = ({ }) => ({});

// mapStateToPropsで生成されたpropsとmapDispatchToPropsで生成されたpropsを引数にとり，
// コンポーネントで使う形に整形して渡す関数
// ここではmonth, calenderがBoardのプロパティになる．
// 嗚呼，型が欲しい……　monthもcalendarも型がわからないので実装を見に行くしかない．
// const mergeProps = stateProps => ({ calendar: createCalendar(stateProps.calendar) })
const mergeProps = ({ calendar }) => ({
  month: calendar,
  calendar: createCalendar(calendar)
})

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
