import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Sender.css";
import moment from "moment";

class TchatSender extends Component {

  // Constructeur avec les props
  // On doit appeler super avec les props
  constructor(props) {
    super(props);

    this.state = {
      props: props,
      message: ""
    };
  }

  sendMessage(e) {
    console.log(this.state);

    // Construire le message à envoyer à l'api REST

    const message = {
      date: moment().format('YYYY-MM-DDThh:mm:ss.000Z'),
      userId: 0,
      message: this.state.message
    }

    let _xhr = new XMLHttpRequest();
    _xhr.open('POST', this.state.props.adrsrv + '/publicDiscussions');
    _xhr.setRequestHeader('Content-Type', 'application/json');
    _xhr.onreadystatechange = e => {
      if (e.target.readyState < XMLHttpRequest.DONE) {
        if (e.target.status >= 200 && e.target.status < 300) {
          console.log(e.target.response);
        } else {
          console.log('erreur serveur');
        }

      }


    }

    _xhr.send(JSON.stringify(message));

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

      </div>
    )
  }
}

export default TchatSender;
