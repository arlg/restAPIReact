import React, { Component } from "react";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "./component.Tchat.Users.css";

import TchatUser from './component.Tchat.Users.User/component.Tchat.Users.User';

class TchatUsers extends Component {

  // Constructeur avec les props
  // On doit appeler super avec les props
  constructor(props) {
    super(props);

    this.state = {
      props: props,
      users: []
    };
  }

  // Fetch
  componentDidMount() {
    fetch(this.state.props.adrsrv + '/users')
      .then(_r => _r.json())
      .then(r => {
        this.setState({ users: r })
      })
      .catch(error => console.log(error));
  }

  // La fonction render genere la sortie
  render() {
    return (
      <div className="TchatUsers">
        <h2>Users :</h2>
        <ul className="TchatUsers__ul">
          {
            this.state.users.map((e, i) => {
              // return console.log(i, e);
              return <TchatUser user={e} key={'user' + i} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default TchatUsers;
