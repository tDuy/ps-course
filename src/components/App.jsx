import React from "react";
import PropTypes from "prop-types";
import Header from "./common/Header.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
