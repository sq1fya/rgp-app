import React, { Component } from 'react'
import './App.css'

class App extends Component {

state = {

  tasks: [
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
      isImportant: true
    }
  ]
}

  render() {
    return (
      <div className="App">
        <h1>Menu</h1>
        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {
                    task.isImportant ? <span>&#9734;</span> : <span>&#9733;</span>
                  }
                  {
                    task.isDone ? <del>{task.title}</del> : task.title
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
