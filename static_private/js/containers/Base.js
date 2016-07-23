import React, { Component, PropTypes } from 'react'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Header from '../components/Header'
import Canvas from '../components/Canvas'

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
        <Header />
        <Canvas />
        <div className="contents">
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Base)
