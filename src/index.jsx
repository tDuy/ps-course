import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import BasicRouter from "./routes.jsx";
import App from "./components/App.jsx";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";
import css from "../node_modules/toastr/build/toastr.min.css";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

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
