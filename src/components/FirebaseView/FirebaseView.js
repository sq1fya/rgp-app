import React, { Component } from "react";
import {
  getUsers,
  addUser,
  deleteUser,
  addPoint,
  deletePoint
} from "../../services/users";

import "./FirebaseView.css";

class FirebaseView extends Component {
  state = {
    name: "",
    surname: "",
    point: "",
    users: []
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = event => {
    this.setState({ surname: event.target.value });
  };
  handlePointChange = event => {
    this.setState({ point: event.target.value });
  };

  getUsers = () =>
    getUsers().then(users =>
      this.setState({
        users
      })
    );

  handleSubmit = event => {
    event.preventDefault();
    addUser(this.state.name, this.state.surname, this.state.point).then(
      this.getUsers
    );
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="FirebaseView">
        <div className="TitleBox">
          <h1>Player base</h1>
        </div>
        <div className="FormBox">
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
            <input
              placeholder="start point"
              value={this.state.point}
              onChange={this.handlePointChange}
            />
            <button>Add</button>
          </form>
        </div>
        <div className="TitleListBox">
          <p>List of player in Retro Game Party base :</p>
        </div>
        <div className="MainListBox">
          <ul>
            {this.state.users.map(user => (
              <li key={user.id}>
                <div className="MainListBoxFlex">
                <div className="MainListBoxName">
                  {user.name} {user.surname} {user.point}
                </div>
                <div className="MainListBoxButtons">
                  <button
                    onClick={() => deleteUser(user.id).then(this.getUsers)}
                  >
                    delete
                  </button>
                  <button
                    onClick={() =>
                      addPoint(user.id, user.point + 1).then(this.getUsers)
                    }
                  >
                    {" "}
                    + 1
                  </button>
                  <button
                    onClick={() =>
                      deletePoint(user.id, user.point - 1).then(this.getUsers)
                    }
                  >
                    {" "}
                    - 1
                  </button>
                </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default FirebaseView;
