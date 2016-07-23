import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let lists = ['hoge','fuga','moga','piyo']

    return (
      <ul>
        {lists.map( item => 
          <li key={item}><Link to={item}>{item}</Link></li>
        )}
      </ul>
    )
  }
}

export default connect()(Menu)
