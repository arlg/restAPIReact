import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Viewer.css";
import Moment from "moment";

// Message single pouir le Viewer
function Message(props) {
  return (

    <div className="viewer-message" >
      {/* Exemple de style inline */}
      <div className="viewer-message-user" style={{ width: '100px', textAlign: "center" }}>
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
      messages: [],
      adrsrv: this.props.adrsrv
    };
  }

  // Fetch
  componentDidMount() {
    fetch(this.state.adrsrv + '/publicDiscussions?_expand=user')
      .then(_r => _r.json())
      .then(jresponse => {
        console.log(jresponse);
        // Il faut setState pour appliquer la ressource au composant (et permettre les mises à jour)
        this.setState({ messages: jresponse })
      })
      .catch((error) => console.log(error));
  }

  // La fonction render genere la sortie
  // Array de messages
  render = () => {
    return (
      <div className="TchatViewer">
        {
          this.state.messages.map((e, i) => {
            return <Message message={e} key={'message-' + i}></Message>
          })
        }
      </div >
    )
  }
}

export default TchatViewer;
