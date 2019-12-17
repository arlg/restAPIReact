import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Users.User.css";

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
        <img src={this.props.user.img}></img>
        {this.props.user.prenom} {this.props.user.name}
      </li>
    )
  }
}

export default TchatUser;
