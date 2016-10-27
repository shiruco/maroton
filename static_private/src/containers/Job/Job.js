import React, { Component, PropTypes } from 'react'
import Mailto from 'react-mailto'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import styles from './Job.css'

let Job = ({ dispatch }) => {

  let emailAdress = 'bobdylan621@yahoo.co.jp'

  return (
    <div>
    	<div className={styles.contactWrapper}>
        <p className={styles.titleWrapper}>Contact</p>
        <p className={styles.detail}>お仕事のご依頼は<Mailto email="bobdylan621@yahoo.co.jp" obfuscate={true}>こちら</Mailto>から</p>
      </div>
    </div>
  )
}

export default connect()(Job)
