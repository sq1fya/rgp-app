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

  toggleTaskImportant = taskId => {
    this.setState({
      tasks: this.state.tasks.map(
        task => taskId !== task.id ? task : {
          ...task,
          isImportant: !task.isImportant
        }
      )
    })
  }

  // toggleTaskUnimportant = taskId => {
  //   this.setState({
  //     tasks: this.state.tasks.map(
  //       task => taskId !== task.id ? task : {
  //         ...task,
  //         isImportant: false
  //       }
  //     )
  //   })
  // }

  toggleTaskDone = taskId => {
    this.setState({
      tasks: this.state.tasks.map(
        task => taskId !== task.id ? task : {
          ...task,
          isDone: !task.isDone
        }
      )
    })
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
                    task.isImportant ?
                      <span onClick={() => this.toggleTaskImportant(task.id) }>&#9733;</span> :
                      <span onClick={() => this.toggleTaskImportant(task.id) }>&#9734;</span>
                  }
                  {
                    task.isDone ? <del>{task.title}</del> : task.title
                  }
                  <button onClick={() => this.toggleTaskDone(task.id)}>toggle done</button>
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
