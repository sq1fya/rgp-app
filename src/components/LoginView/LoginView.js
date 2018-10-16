import React, { Component } from 'react'
import SignUpForm from "../SignUpForm/SignUpForm"
import SignInForm from "../SignInForm/SignInForm"

import './LoginView.css'

class LoginView extends Component {

  render() {
    return  (
      <div className="LoginView">
        Enter Login to start use App
        <SignUpForm />
        Sign In to Login
        <SignInForm />
      </div>
    )
  }
}

export default LoginView