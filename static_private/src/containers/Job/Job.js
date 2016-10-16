import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import styles from './Job.css'

let Job = ({ dispatch }) => {

  return (
    <div>
    	<div className={styles.contactWrapper}>
            <p className={styles.title}>Contact</p>
            <p className={styles.description}>お仕事、お見積もりのご依頼やご質問等は下記のフォームよりお気軽にお問い合わせ下さい。
            確認次第、メールでご返答させて頂きます。</p>
        </div>
    </div>
  )
}

export default connect()(Job)
