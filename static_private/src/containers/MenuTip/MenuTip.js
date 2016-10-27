import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuTip from '../../components/MenuTip/MenuTip'
import { showSpinner } from '../../actions'

const mapStateToProps = (state) => {
  return {
    isShow: state.app.isShowMenu
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
)(MenuTip)
