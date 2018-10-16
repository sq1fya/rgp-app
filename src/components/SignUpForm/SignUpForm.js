import React, { Component } from "react"

class SignUpForm extends Component {

    render() {
        return (
            <form>
                <input placeholder="Enter email" name="email" />
                
                <input placeholder="Enter password" name="password" />
                <button>Sign up</button>
            </form>
        )
    }
}

export default SignUpForm 