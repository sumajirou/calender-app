// React
import React from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
// dayjs
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
// pickers
import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// My components
import Navigation from './components/Navigation/container';
import CalendarBoard from "./components/CalendarBoard/container";
// My redux store
import rootReducer from "./redux/rootReducer";
const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
