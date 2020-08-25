import Navigation from './presentation';
import { connect } from 'react-redux';
import { getNextMonth, getPreviousMonth } from '../../services/calendar';
import { calendarSetMonth } from '../../redux/calendar/actions';

const mapStateToProps = ({ calendar }) => ({ calendar });

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calendarSetMonth(month))
  }
});

const mergeProps = ({ calendar }, { setMonth }) => ({
  setNextMonth: () => {
    const nextMonth = getNextMonth(calendar);
    setMonth(nextMonth)
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(calendar);
    setMonth(previousMonth)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
