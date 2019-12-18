import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Sender.css";
import moment from "moment";

import Modal from 'react-modal';

class TchatSender extends Component {

  // Constructeur avec les props
  // On doit appeler super avec les props
  constructor(props) {
    super(props);

    this.state = {
      props: props,
      message: "",
      modal: {
        isOpen: false
      }
    };

    Modal.setAppElement('#root');
  }

  sendMessage(e) {
    // console.log(this.state);

    // Construire le message à envoyer à l'api REST
    const message = {
      date: moment().format('YYYY-MM-DDThh:mm:ss.000Z'),
      userId: 0,
      message: this.state.message
    };

    console.log('-->OPEN');
    this.modalMessage = 'Envoi de votre message ...';
    this.setIsOpen(true);

    let _xhr = new XMLHttpRequest();
    _xhr.open('POST', this.state.props.adrsrv + '/publicDiscussions');
    _xhr.setRequestHeader('Content-Type', 'application/json');
    _xhr.onreadystatechange = e => {
      if (e.target.readyState < XMLHttpRequest.DONE) {

        if (e.target.status >= 200 && e.target.status < 300) {
          console.log('-->OK');
          console.log(e.target.response);

          this.modalMessage = '';
          this.setIsOpen(false);

        } else {
          console.log('// erreur serveur', e.target.status);
          this.modalMessage = 'Erreur serveur, Erreur : ' + e.target.status;
          this.setIsOpen(true);
        }

      }
    };

    _xhr.send(JSON.stringify(message));

  }

  /**
   * MODALS
   */

  setIsOpen(_bool) {
    // ! Le setState re-rend tout le composant
    this.setState(
      {
        modal:
        {
          isOpen: _bool,
          modalMessage: this.modalMessage
        }
      });
  }

  closeModal() {
    this.setIsOpen(false);
  }

  // La fonction render genere la sortie
  render() {
    return (
      <div className="TchatSender">

        <img src="#" className="img-responsive" alt="Image" />

        <div className="input-group TchatSender__group">
          <input type="text" name="message" value={this.state.message} id="message" className="form-control" placeholder="Mon message..." onChange={
            (e) => {
              this.setState({ message: e.target.value });
              console.log(this.state);
            }
          } />
          <button type="button" className="btn btn-large btn-block btn-primary" onClick={(e) => { this.sendMessage() }}>button</button>
        </div>

        <Modal isOpen={this.state.modal.isOpen} contentLabel={this.modalLabel}>
          <h3 style={{ textAlign: "center" }}>Modal</h3>
          <p>{this.state.modal.modalMessage}</p>

          <button type="button" className="btn btn-danger" onClick={() => { this.closeModal() }}>button</button>

        </Modal>

      </div>
    )
  }
}

export default TchatSender;
