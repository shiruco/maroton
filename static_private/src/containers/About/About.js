import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import styles from './About.css'

let About = ({ dispatch }) => {
  return (
    <div>
      <div className={styles.titleWrapper}>About_Maroton</div>
      <div className={styles.detailWrapper}>
        <p className={styles.subTitle}>コンセプト</p>
      </div>
    </div>
  )
}

export default connect()(About)
