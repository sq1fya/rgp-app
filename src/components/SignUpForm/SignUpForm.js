import React, { Component } from "react"
import firebase from "firebase"
import "./SignUpForm.css"

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
                    id="inp"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <input
                    id="inp"
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