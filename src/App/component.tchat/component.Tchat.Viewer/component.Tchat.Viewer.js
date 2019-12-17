import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Viewer.css";
import moment from "moment";

// Message single pouir le Viewer
function Message(props) {
  return (

    <div className="viewer-message">
      {/* Exemple de style inline */}
      <div className="viewer-message__top">
        <img src={props.message.user.img} className="img-responsive" alt="Image" />
        <div className="viewer-message-user">
          <p className="viewer-message-user__name">{props.message.user.name}</p>
          <p className="viewer-message-user__date">
            {
              moment(props.message.date).format('YYYY-MM-DD')
            } - {
              moment(props.message.date).format('hh:mm:ss')
            }</p>
        </div>
      </div>
      <div className="viewer-message-message">
        <p>{props.message.message}</p>
      </div>
      {/* {props.message.userId} */}
    </div>
  )
}

class TchatViewer extends Component {

  // Constructeur avec les props
  // On doit appeler super avec les props
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      messages: [],
      adrsrv: this.props.adrsrv
    };
  }

  // Fetch
  componentDidMount() {
    this.interval = setInterval(() => {
      let _dateTime = moment().add(-20, 'm').format('YYYY-MM-DDThh:mm:ss.000Z');
      let _dateToday = moment().add(+1, 'd').format('YYYY-MM-DDThh:mm:ss.000Z');

      console.log(`${this.state.adrsrv}/publicDiscussions?_expand=user&_sort=date&date_gte=${_dateTime}&date_lte=${_dateToday}&_limit=5`);
      fetch(`${this.state.adrsrv}/publicDiscussions?_expand=user&_sort=date&date_gte=${_dateTime}&date_lte=${_dateToday}&_limit=5`)
        .then(_r => _r.json())
        .then(jresponse => {
          console.log(jresponse);
          // Il faut setState pour appliquer la ressource au composant (et permettre les mises à jour)
          this.setState({ messages: jresponse })
        })
        .catch((error) => console.log(error));
    }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
