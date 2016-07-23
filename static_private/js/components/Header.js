import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import logoImg from '../../images/logo.png'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let lists = ['top','about','job']
    return (
      <header className="header fixed d-fl">
        <div className="logo">
          <img src={logoImg} width={100} />
        </div>
        <div className="menu">
          <ul className="d-fl">
            {lists.map( item => 
              <li key={item}><Link to={item}>{item}</Link></li>
            )}
          </ul>
        </div>
      </header>
    )
  }
}

export default connect()(Header)
