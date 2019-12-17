import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./component.Navbar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-inverse">
        <Link to='/' className="navbar-brand">Home</Link>
        <ul className="nav navbar-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/tchat'>Tchat</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </nav>

    </div >

  );
}

export default NavBar;
