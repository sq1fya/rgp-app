import React, { Component } from 'react'

class AddNameForm extends Component {

  state = {
    nameTitle: '',
    error: null
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.nameTitle === '') {
      this.setState({
        error: new Error('Sorry we need Your name  to make it work')
      })
      return;
    }
    this.props.addTaskFunction(this.state.nameTitle);
    this.setState({ nameTitle: '', error: null })
  }

  handleChange = event => {
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
        <input value={this.state.nameTitle} onChange={this.handleChange}/>
        <button>Add</button>
      </form>
    )
  }
}

export default AddNameForm