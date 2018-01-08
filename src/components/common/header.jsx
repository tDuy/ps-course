import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src="/images/pluralsight-logo.png" />
        </a>
        <ul className="nav navbar-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
