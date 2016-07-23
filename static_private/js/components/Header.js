import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let lists = ['hoge','fuga','moga','piyo']

    return (
      <header className="header fixed">
		<ul>
			{lists.map( item => 
			  <li key={item}><Link to={item}>{item}</Link></li>
			)}
		</ul>
	  </header>
    )
  }
}

export default connect()(Header)
