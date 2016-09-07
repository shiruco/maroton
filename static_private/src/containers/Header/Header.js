import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'

import { showSpinner } from '../../actions'

// @connect(state => ({
//     appState: state.app,
//     routerState: state.routing,
//     currentLocation : state.routing.location
// }))

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickMenu: () => {
      dispatch(showSpinner(true))

      setTimeout(()=> {
        dispatch(showSpinner(false))
      },500)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
