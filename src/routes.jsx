"use strict";

import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import CoursesPage from "./components/course/CoursesPage.jsx";

const BasicRouter = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/courses" component={CoursesPage} />
  </div>
);

export default BasicRouter;
