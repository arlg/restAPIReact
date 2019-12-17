import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Viewer.css";
import Moment from "moment";

// Message single pouir le Viewer
function Message(props) {
  return (
    <div className="viewer-message">
      <div className="viewer-message-user">
        {props.message.userId} : {props.message.user.name}
      </div>
      <div className="viewer-lmessage-message">
        {props.message.message}
      </div>
    </div>
  )
}

class TchatViewer extends Component {

  // Constructeur avec les props
  // On doit appeler super avec les props
  constructor(props) {
    super(props);

    this.state = {
      date: Moment(),
      messages: []
    };
  }

  // La fonction render genere la sortie
  // Array de messages
  render = () => {
    return (
      <div className="TchatViewer">
        Viewer
        <Message message={this.state.messages}></Message>
      </div>
    )
  }
}

export default TchatViewer;
