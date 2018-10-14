import React, { Component } from 'react'

class AddTaskForm extends Component {

    state = {
        taskTitle: '',
        nameTitle: '',
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
    handleSubmitName = event => {
        event.preventDefault()
        if (this.state.Title === '') {
            this.setState({
                error: new Error('Sorry we need IMIE to make it work')
            })
            return;
        }
        this.props.addNameFunction(this.state.nameTitle);
        this.setState({ nameTitle: '', error: null })
    }


    handleChange = event => {
        this.setState({
            taskTitle: event.target.value
        })
    }
    handleChangeName = event => {
        this.setState({
            nameTitle: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {
                    this.state.error && <p>{this.state.error.message}</p>
                }
                <input value={this.state.taskTitle} onChange={this.handleChange} /><input value={this.state.nameTitle} onChange={this.handleChangeName} />
                <button>Add</button>
            </form>
        )
    }
}

export default AddTaskForm