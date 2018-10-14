import React, { Component } from 'react'
import AddTaskForm from '../src/components/AddTaskForm/AddTaskForm';
import './App.css'

class App extends Component {

  state = {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    previousState: null
  }

  toggleTaskImportant = taskId => {
    this.setState({
      previousState: this.state,
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
      previousState: this.state,
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
      previousState: this.state,
      tasks: this.state.tasks.filter(
        task => taskId !== task.id
      )
    })
  }

  handleUndo = () => {
    this.setState(this.state.previousState)
  }

  addTask = title => {
    this.setState({
      previousState: this.state,
      tasks: this.state.tasks.concat({
        id: Date.now(),
        title: title,
        isDone: false,
        isImportant: false
      })
    })
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  render() {
    return (
      <div className="App">
        <h1>Awesome ToDo</h1>
        <AddTaskForm addTaskFunction={this.addTask} />
        <button onClick={this.handleUndo}>Undo</button>
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
    )
  }
}

export default App