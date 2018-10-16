import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Auth.css'

class Auth extends Component {
  state = {
    user: {} 
    // null albo {}
  }

  render() {
    return  (
      <div className="Auth">
        {
          this.state.user ? this.props.children : <>
            Formularze
          </>
        }
      </div>
    )
  }
}

export default Auth