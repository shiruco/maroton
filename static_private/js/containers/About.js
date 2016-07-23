import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>About</div>
    )
  }
}

export default connect()(About)
