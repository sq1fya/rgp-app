import React, { Component } from "react"
import firebase from "firebase/app"
import 'firebase/auth'

class SignInForm extends Component {

    state = {
        email: "",
        password: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password,
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="SignInForm">
                <input
                    placeholder="Enter email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button>Sign In</button>
            </form>
        )
    }
}

export default SignInForm
