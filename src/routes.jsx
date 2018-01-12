"use strict";

import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import CoursesPage from "./components/course/CoursesPage.jsx";
import ManageCoursePage from "./components/course/ManageCoursePage.jsx";

const BasicRouter = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route exact path="/course" component={ManageCoursePage} />
    <Route exact path="/course/:id" component={ManageCoursePage} />
    <Route path="/about" component={AboutPage} />
  </div>
);

export default BasicRouter;
