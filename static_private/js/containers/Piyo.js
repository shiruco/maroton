import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Piyo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>piyo</div>
    )
  }
}

export default connect()(Piyo)
