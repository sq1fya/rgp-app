import React, { Component } from "react"
import firebase from "firebase"

class SignUpForm extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="SignUpForm">
                <input
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <input
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />

                <button>Sign up</button>
            </form>
        )
    }
}

export default SignUpForm 