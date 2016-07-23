import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import style from '../../scss/(u@w@u).css.scss'

class Top extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <div className="mes">
            Modern_Application_Design
          </div>
        <div className="c01">
          
        </div>
      </section>
    )
  }
}

export default connect()(Top)
