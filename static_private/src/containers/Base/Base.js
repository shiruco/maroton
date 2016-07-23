import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import Canvas from '../../components/Canvas/Canvas'

import styles from './Base.css'

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
        <div id="contents" className={styles.contents}>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Base)
