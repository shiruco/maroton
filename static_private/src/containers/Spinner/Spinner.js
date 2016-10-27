import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner'

const mapStateToProps = (state) => {
  return {
    isShow: state.app.isShowSpinner
  }
}

export default connect(
  mapStateToProps
)(Spinner)
