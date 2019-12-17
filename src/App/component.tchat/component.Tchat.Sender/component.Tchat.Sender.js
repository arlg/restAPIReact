import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Sender.css";

class TchatSender extends Component {

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
      <div className="TchatSender">

        <img src="#" className="img-responsive" alt="Image" />

        <div className="input-group">
          <input type="text" name="" id="input" className="form-control" value="" required="required" />

          <button type="button" className="btn btn-large btn-block btn-primary">button</button>

        </div>
      </div>
    )
  }
}

export default TchatSender;
