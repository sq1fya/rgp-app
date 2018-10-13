import React, { Component } from 'react';
import './App.css';

const users = [
  {
    id: 1,
    title: 'User 1',
    isDone: false,
    isImportant: false
  },
  {
    id: 2,
    title: 'User 2',
    isDone: true,
    isImportant: false
  },
  {
    id: 3,
    title: 'User 3',
    isDone: false,
    isImportant: false
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Menu</h1>
        <ul>
          {
            users.map(
              user => (
                <li key={user.id}>
                {
                  user.isDone ? <del>[user.title]</del> : user.title
                }
                </li>
              )
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
