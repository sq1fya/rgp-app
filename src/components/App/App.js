import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LoginView from "../LoginView/LoginView";
import Login from "../Login/Login";
import Createuser from "../Createuser/Createuser";
import FirebaseView from "../FirebaseView/FirebaseView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="enter">ENTER THE MATRIX</NavLink>
            </li>
            <li>
              <NavLink to="login" >
              login
              </NavLink>
            </li>
            <li>
              <NavLink to="createuser" >
              create user</NavLink>
            </li>
            <li>
              <NavLink to="/firebase">Add player data</NavLink>
            </li>
          </ul>

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
          <Route exact path="/enter" component={LoginView} />
          <switch>
          <Route path="/login" component={Login} />
          <Route path="/createuser" component={Createuser} />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
