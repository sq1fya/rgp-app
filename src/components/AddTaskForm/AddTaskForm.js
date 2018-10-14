import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AddTaskForm.css'

class AddTaskForm extends Component {

  static propTypes = {
    /**
     * Function called during form submission 
     * 
     * @param {string} title text written in the form field
     */
    addTaskFunction: PropTypes.func
  }

  static defaultProps = {
    addTaskFunction: title => console.log(`Trying to add task with title: ${title} `)
  }

  state = {
    taskTitle: '',
    error: null
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.taskTitle === '') {
      this.setState({
        error: new Error('Sorry we need task title to make it work')
      })
      return;
    }
    this.props.addTaskFunction(this.state.taskTitle);
    this.setState({ taskTitle: '', error: null })
  }

  handleChange = event => {
    this.setState({
      taskTitle: event.target.value
    })
  }

  render() {
    return (
      <form className="AddTaskForm" onSubmit={this.handleSubmit}>
        {
          this.state.error && <p>{this.state.error.message}</p>
        }
        <input value={this.state.taskTitle} onChange={this.handleChange}/>
        <button>Add task</button>
      </form>
    )
  }
}

export default AddTaskForm