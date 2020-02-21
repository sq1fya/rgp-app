import React, { Component } from "react";
// import PropTypes from 'prop-types'
import LoginView from "../LoginView";
import "./Auth.css";
import firebase from "firebase/app";
import 'firebase/auth'

class Auth extends Component {
  state = {
    user: null
    // null albo {}
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }
  render() {
    return (
      <div>
        <div className="AuthPicBox" />
        <div className="Auth">
          {this.state.user ? (
            this.props.children
          ) : (
            <>
              <LoginView />
            </>
          )}
        </div>
        <div className="AuthPicBox" />
      </div>
    );
  }
}

export default Auth;
