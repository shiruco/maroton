import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from './Spinner.css'
import helperStyles from '../../Helper.css'

class Spinner extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    console.log("Spinner",this.props)

    let visibleStyle = helperStyles.di

    return (
      <div className={styles.spinner,visibleStyle}></div>
    )
  }
}

Spinner.defaultProps = {
  isShow: false
}

export default Spinner
