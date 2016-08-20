import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

let About = ({ dispatch }) => {
  return (
    <div>About</div>
  )
}

export default connect()(About)
