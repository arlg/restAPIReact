import React from "react";
import "./App.css";
import NavBar from "./component.Navbar/component.Navbar";
import User from "./component.User/component.User.view";
import Users from "./component.Users/component.Users";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Tchat from "./component.tchat/component.tchat";

// Adresse du serveur de données
const ADR_SRV = 'http://localhost:3210';

let _users = JSON.parse('[{"id": 1,"nom": "DESORBAIX","prenom": "Alexandre","serviceId": "1"},{"id": 2,"nom": "Kelly","prenom": "diossi","serviceId": "1"}]');

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>

        {/* Le switch de routes */}
        <Switch>
          <Route path="/users">
            {/* <Users users={_users}></Users> */}
          </Route>
          <Route path="/tchat">
            <Tchat adrsrv={ADR_SRV}></Tchat>
          </Route>
          <Route path="/user">
            {/* <User unUser={{ nom: "DIOSSI", prenom: "Kelly", serviceId: 0 }}></User> */}
          </Route>
          {/* La dernière route doit être la home */}
          <Route path="/">
            <div className="Home">
              Demat Breizouzh
            </div>
          </Route>
        </Switch>

      </Router>
      <hr />

    </div >
  );
}

export default App;
