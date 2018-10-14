import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// import TodoView from "../TodoView/TodoView";
// import EmployeesView from "../EmployeesView/EmployeesView";
// import EmployeeView from "../EmployeeView/EmployeeView";
// import GridView from "../GridView/GridView";

// import StudentsView from "../StudentsView";
// import GroupsView from '../GroupsView';

import FirebaseView from '../FirebaseView/FirebaseView';

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
              <NavLink to="/firebase">Add player data</NavLink>
            </li>
          </ul>

          <Route exact path="/" component={() =>
            <div>
              <h1>Retro Game Party Tournament App</h1>
              <div>
                This app will be developed in order to learn about the possibilities REACT gives us
                <p><a href="http://facebook.com/retrogameparty/">visit fan page</a></p>
              </div>
            </div>
          } />
          <Route path="/firebase" component={FirebaseView} />
        </div>
      </Router>
    );
  }
}

export default App;
