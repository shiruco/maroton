import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Hoge extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        hoge
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect()(Hoge)
