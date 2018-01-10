import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import BasicRouter from "./routes.jsx";
import App from "./components/App.jsx";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "./actions/courseActions";

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <BasicRouter />
      </App>
    </Router>
  </Provider>,
  document.getElementById("app")
);
