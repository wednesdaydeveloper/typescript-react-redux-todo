import * as React from "react";
import { render } from "react-dom";
import TotoList from "./containers/TotoList";
import AddTodo from "./containers/AddTodo";
import Filter from "./containers/Filter";
import store from "./store";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <div>
      <AddTodo />
      <TotoList />
      <Filter />
    </div>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
