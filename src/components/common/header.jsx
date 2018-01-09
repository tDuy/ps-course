import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          LOGO
        </NavLink>
        <ul className="nav navbar-nav">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              activeStyle={{
                color: "#fff",
                backgroundColor: "#ff8b54"
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              activeClassName="active"
              activeStyle={{
                color: "#fff",
                backgroundColor: "#ff8b54"
              }}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
              activeStyle={{
                color: "#fff",
                backgroundColor: "#ff8b54"
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
