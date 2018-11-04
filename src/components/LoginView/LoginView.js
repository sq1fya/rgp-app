import React, { Component } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/SignInForm";

import "./LoginView.css";

class LoginView extends Component {
  render() {
    return (
      <div className="LoginView">
        <label className="SignUpLabel">
          Register first. Enter login and pass to create Your acount
        </label>
        <SignUpForm />
        <label className="SignInLabel">
          Sign in App
        </label>
        <SignInForm />
      </div>
    );
  }
}

export default LoginView;
