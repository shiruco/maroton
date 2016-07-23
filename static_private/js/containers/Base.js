import React, { Component, PropTypes } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Menu from './Menu'

@connect(state => ({
    routerState: state.routing,
    currentLocation : state.routing.location
}))

class Base extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      	<Menu />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect()(Base)
