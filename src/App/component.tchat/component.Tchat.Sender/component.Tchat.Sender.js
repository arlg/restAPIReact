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
      <div class="TchatSender">

        <img src="#" class="img-responsive" alt="Image" />>

        <div class="input-group">
          <input type="text" name="" id="input" class="form-control" value="" required="required" />

          <button type="button" class="btn btn-large btn-block btn-primary">button</button>

        </div>
      </div>
    )
  }
}

export default TchatSender;
