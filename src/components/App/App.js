import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import TodoView from "../TodoView/TodoView";
import EmployeesView from "../EmployeesView/EmployeesView";
import EmployeeView from "../EmployeeView/EmployeeView";
import GridView from "../GridView/GridView";

import StudentsView from "../StudentsView";
import GroupsView from '../GroupsView';

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
              <NavLink to="/todo">Todo</NavLink>
            </li>
            <li>
              <NavLink to="/employees">Employees</NavLink>
            </li>
            <li>
              <NavLink to="/grid">Grid</NavLink>
            </li>
            <li>
              <NavLink to="/students">Students</NavLink>
            </li>
            <li>
              <NavLink to="/groups">Groups</NavLink>
            </li>
            <li>
              <NavLink to="/firebase">Firebase</NavLink>
            </li>
          </ul>

          <Route exact path="/" component={() => <h1>Hello</h1>} />
          <Route path="/todo" component={TodoView} />
          <Route exact path="/employees" component={EmployeesView} />
          <Route path="/employees/:employeeId" component={EmployeeView} />
          <Route path="/grid" component={GridView} />
          <Route path="/students" component={StudentsView} />
          <Route path="/groups" component={GroupsView} />
          <Route path="/firebase" component={FirebaseView} />
        </div>
      </Router>
    );
  }
}

export default App;
