import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function NavBar(props) {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#">Title</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </nav>

    </div>

  );
}

export default NavBar;
