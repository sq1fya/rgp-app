import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StarButton extends Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <span onClick={this.props.handleClick}>
        {this.props.isActive ? <span>&#9733;</span> : <span>&#9734;</span>}
      </span>
    )
  }
}

export default StarButton
