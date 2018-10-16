import React, { Component } from 'react'
import SignUpForm from "../SignUpForm/SignUpForm"

import './LoginView.css'

class LoginView extends Component {

  render() {
    return  (
      <div className="LoginView">
        LoginView in this place input come
        <SignUpForm />
      </div>
    )
  }
}

export default LoginView