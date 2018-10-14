import React, { Component } from 'react'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import StarButton from '../StarButton/StarButton'
import Button from '../Button/Button'

class TodoView extends Component {

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
      <div>
        <h1>Awesome ToDo</h1>
        <AddTaskForm addTaskFunction={this.addTask} />
        <Button handleClick={this.handleUndo}>Undo</Button>
        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  <StarButton isActive={task.isImportant} handleClick={() => this.toggleTaskImportant(task.id)} />
                  {
                    task.isDone ? <del>{task.title}</del> : task.title
                  }
                  <Button 
                    handleClick={() => this.toggleTaskDone(task.id)} 
                    children={'toggle done'}
                  />
                  <Button handleClick={() => this.removeTask(task.id)}>
                    remove
                  </Button>
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default TodoView