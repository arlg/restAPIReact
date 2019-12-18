import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Users.User.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class TchatUser extends Component {

  // Constructeur avec les props
  // On doit appeler super avec les props
  constructor(props) {
    super(props);

    this.state = {
      props: props
    };
  }

  // La fonction render genere la sortie
  render() {
    return (
      <li className="TchatUser">
        <Link to={'/user/' + this.props.user.id} target="_blank">
          <img src={this.props.user.img}></img>
          {this.props.user.prenom} {this.props.user.name}
        </Link>
      </li>
    )
  }
}

export default TchatUser;
