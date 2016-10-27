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
          <p className={styles.headerSubMessageText}>Marotonはwebサービス及びスマートフォンアプリケーションの企画・制作を通じて、人と人とのコミュニケーションをデザインしています。</p>
        </div>
      </div>
    </div>
  )
}

export default connect()(Top)
