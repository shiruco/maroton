import styles from './Top.css'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { showSpinner } from '../../actions'

let Top = ({ dispatch }) => {
  return (
    <div>
      <div className={styles.headerMessage}>
        Modern_Application_Design
        <div className={styles.headerSubMessage}>
          <p>marotonはwebアプリケーションの実装を得意としています。</p>
          <p>marotonはwebアプリケーションの実装を得意としています。</p>
          <p>marotonはwebアプリケーションの実装を得意としています。</p>
        </div>
      </div>
      <div className={styles.contentBlock}>
        あいうえお
      </div>
    </div>
  )
}

export default connect()(Top)
