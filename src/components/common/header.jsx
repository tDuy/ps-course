import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LoadingDots from "../common/LoadingDots.jsx";

const Header = props => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand">
          LOGO
        </NavLink>
        <ul className="nav navbar-nav">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              activeStyle={{
                color: "#555",
                backgroundColor: "#e7e7e7"
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
                color: "#555",
                backgroundColor: "#e7e7e7"
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
                color: "#555",
                backgroundColor: "#e7e7e7"
              }}
            >
              About
            </NavLink>
          </li>
          <li>{props.loading && <LoadingDots interval={100} dots={20} />}</li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(connect(mapStateToProps)(Header));
// export default Header;
