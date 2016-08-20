import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { showSpinner } from '../../actions'
import styles from './Spinner.css'
import helperStyles from '../../Helper.css'

class Spinner extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let visibleStyle
    let isShow = this.props.isShow
    if(isShow) {
      visibleStyle = helperStyles.db
    } else {
      visibleStyle = helperStyles.dn
    }

    let spinnerClass = styles.spinner + ' ' + visibleStyle

    return (
      <div className={spinnerClass}></div>
    )
  }
}

Spinner.defaultProps = {
  isShow: false
}

export default Spinner
