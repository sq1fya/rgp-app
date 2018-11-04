import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LoginView from "../LoginView/LoginView";
import FirebaseView from "../FirebaseView/FirebaseView";
import firebase from "firebase";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="LogOutBox">
          <div className="App">
            You are logged in on email:{" "}
            <strong>
              {firebase.auth().currentUser && firebase.auth().currentUser.email}
            </strong>
            <div className="LogOutButton">
            <button onClick={() => firebase.auth().signOut()}>Log Out</button>
          </div>
          </div>
          
          <ul>
            <li id="NavLi">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            {/* <li id="NavLi">
              <NavLink to="loginview" >
                login view
              </NavLink>
            </li> */}
            <li id="NavLi">
              <NavLink to="/firebase">Add player data</NavLink>
            </li>
          </ul>
          <Route path="/loginview" component={LoginView} />
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <h1>Retro Game Party Tournament App</h1>
                <div>
                  This app will be developed in order to learn about the
                  possibilities REACT gives us
                  <p>
                    <a href="http://facebook.com/retrogameparty/">
                      visit fan page
                    </a>
                  </p>
                </div>
              </div>
            )}
          />
          <Route path="/firebase" component={FirebaseView} />
        </div>
      </Router>
    );
  }
}

export default App;
