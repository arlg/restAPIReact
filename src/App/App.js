import React from "react";
import "./App.css";
import NavBar from "./component.Navbar/component.Navbar";
import User from "./component.User/component.User.view";
import Users from "./component.Users/component.Users";

import Tchat from "./component.tchat/component.tchat";

// Adresse du serveur de données
const ADR_SRV = 'https://my-json-server.typicode.com/champix56/restAPIReact';

let _users = JSON.parse('[{"id": 1,"nom": "DESORBAIX","prenom": "Alexandre","serviceId": "1"},{"id": 2,"nom": "Kelly","prenom": "diossi","serviceId": "1"}]');

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Tchat adrsrv={ADR_SRV}></Tchat>

      <hr />
      <Users users={_users}></Users>
      <User unUser={{ nom: "DIOSSI", prenom: "Kelly", serviceId: 0 }}></User>

    </div >
  );
}

export default App;
