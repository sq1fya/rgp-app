import React, { Component } from "react";
import { getUsers, addUser, deleteUser } from "../../services/users";

import "./FirebaseView.css";

class FirebaseView extends Component {
  state = {
    name: "",
    surname: "",
    users: []
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = event => {
    this.setState({ surname: event.target.value });
  };

  getUsers = () =>
    getUsers().then(users =>
      this.setState({
        users
      })
    );

  handleSubmit = event => {
    event.preventDefault();
    addUser(this.state.name, this.state.surname).then(this.getUsers);
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="FirebaseView">
        <h1>Player base</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            placeholder="surname"
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
          <button>Add</button>
        </form>
        <p>List of player in Retro Game Party base :</p>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.name} {user.surname}
              <button onClick={() => deleteUser(user.id).then(this.getUsers)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FirebaseView;
