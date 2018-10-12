import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {

  render() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Button