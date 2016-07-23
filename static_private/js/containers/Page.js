import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Page extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>page</div>
    )
  }
}

export default connect()(Page)
