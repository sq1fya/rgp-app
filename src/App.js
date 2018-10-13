import React, { Component } from 'react'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
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


  removeTask = taskId => {
    this.setState({
      tasks: this.state.tasks.filter(
        task => taskId !== task.id
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Menu</h1>
        <AddTaskForm/>
        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {
                    task.isImportant ?
                      <span onClick={() => this.toggleTaskImportant(task.id)}>&#9733;</span> :
                      <span onClick={() => this.toggleTaskImportant(task.id)}>&#9734;</span>
                  }
                  {
                    task.isDone ? <del>{task.title}</del> : task.title
                  }
                  <button onClick={() => this.toggleTaskDone(task.id)}>toggle done</button>
                  <button onClick={() => this.removeTask(task.id)}>remove</button>
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
