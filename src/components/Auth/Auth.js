import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import LoginView from "../LoginView"
import './Auth.css'

class Auth extends Component {
  state = {
    user: null
    // null albo {}
  }

  render() {
    return  (
      <div className="Auth">
        {
          this.state.user ? this.props.children : <>
            <LoginView />
          </>
        }
      </div>
    )
  }
}

export default Auth