import React, { Component } from 'react'

class AddTaskForm extends Component {

    handleSubmit = event => {
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input />
                <button>Add</button>
            </form>
        )
    }
}

export default AddTaskForm