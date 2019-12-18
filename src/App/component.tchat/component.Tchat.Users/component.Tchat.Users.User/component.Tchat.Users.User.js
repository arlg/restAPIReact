import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Users.User.css";

import {
  Link
} from 'react-router-dom';

import ReactModal from 'react-modal';

class TchatUser extends Component {

  // Constructeur avec les props
  // On doit appeler super avec les props
  constructor(props) {
    super(props);

    this.state = {
      props: props,
      modal: {
        isOpen: false
      }
    };
  }

  // Test de modal
  openModal() {
    this.to = setTimeout(this.setState({ modal: { isOpen: true } }), 1000);
  }

  // La fonction render genere la sortie
  render() {
    return (
      <li className="TchatUser">
        <Link to={'/user/' + this.props.user.id} target="_blank" onMouseOver={this.openModal.bind(this)}>
          <img src={this.props.user.img}></img>
          {this.props.user.prenom} {this.props.user.name}
        </Link>
        <ReactModal isOpen={this.state.modal.isOpen}>
          <h3 style={{ textAlign: "center" }}>Modal</h3>
        </ReactModal>
      </li>
    )
  }
}

export default TchatUser;
