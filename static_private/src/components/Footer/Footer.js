import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

import styles from './Footer.css'
import helperStyles from '../../Helper.css'

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        Copyright &copy; 2016 maroton. All Rights Reserved.
      </footer>
    )
  }
}

export default Footer
