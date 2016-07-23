import styles from './Top.css'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

class Top extends Component {
  render() {
    return (
      <section>
        <div className={styles.headerMessage}>
          Modern_Application_Design
        </div>
        <div className={styles.contentBlock}>
          
        </div>
      </section>
    )
  }
}

export default connect()(Top)
