import React, { Component } from 'react'
import SignUpForm from "../SignUpForm/SignUpForm"

import './LoginView.css'

class LoginView extends Component {

  render() {
    return  (
      <div className="LoginView">
        Enter Login to start use App
        <SignUpForm />
      </div>
    )
  }
}

export default LoginView