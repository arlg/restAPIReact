import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Users.css";

import TchatUser from './component.Tchat.Users.User/component.Tchat.Users.User';

class TchatUsers extends Component {

  // Constructeur avec les props
  // On doit appeler super avec les props
  constructor(props) {
    super(props);

    this.state = {
      props: props
    };
  }

  // La fonction render genere la sortie
  render = () => {
    return (
      <div className="TchatUsers">
        <h2>Users :</h2>
        <TchatUser></TchatUser>
      </div>
    )
  }
}

export default TchatUsers;
