import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/rootReducer";
import Counter from "./components/Counter/container";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
