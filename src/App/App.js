import React from "react";
import "./App.css";
import NavBar from "./component.Navbar/component.Navbar";
import User from "./component.User/component.User.view";
import Users from "./component.Users/component.Users";


let _users = JSON.parse('[{"id": 1,"nom": "DESORBAIX","prenom": "Alexandre","serviceId": "1"},{"id": 2,"nom": "Kelly","prenom": "diossi","serviceId": "1"}]');

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Users users={_users}></Users>

      <User unUser={{ nom: "DIOSSI", prenom: "Kelly", serviceId: 0 }}></User>

    </div>
  );
}

export default App;
