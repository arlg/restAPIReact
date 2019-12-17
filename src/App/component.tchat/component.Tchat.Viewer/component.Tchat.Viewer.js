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
      date: Moment()
    };
  }

  // La fonction render genere la sortie
  // Array de messages
  render = () => {
    return (
      <div className="TchatViewer">
        Viewer
        <Message message={
          {
            message: 'Hello à tous',
            userId: 0,
            date: '2019-12-17',
            user: {
              id: 0,
              name: 'admin'
            }
          }
        }></Message>
      </div>
    )
  }
}

export default TchatViewer;
