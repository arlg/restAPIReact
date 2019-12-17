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
      <div className="TchatUser">
        {console.log(this.props.user)}
        {this.props.user.prenom} {this.props.user.name}
      </div>
    )
  }
}

export default TchatUser;
