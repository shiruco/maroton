import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Fuga extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>fuga</div>
    )
  }
}

export default connect()(Fuga)
