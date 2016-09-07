import React, { Component, PropTypes } from 'react'
import Header from '../../containers/Header/Header'
import Footer from '../Footer/Footer'
import Canvas from '../Canvas/Canvas'
import Spinner from '../../containers/Spinner/Spinner'

import styles from './App.css'
import logoImg from '../../../images/logo.png'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Spinner />
        <Canvas />
        <div className={styles.contentsWrapper}>
          <div id="contents" className={styles.contents}>
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
