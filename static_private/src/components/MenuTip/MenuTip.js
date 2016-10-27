import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import styles from './MenuTip.css'
import helperStyles from '../../Helper.css'

class MenuTip extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const lists = ['top','about','job']

    let visibleStyle
    let isShow = this.props.isShow

    if(isShow) {
      visibleStyle = styles.show
    } else {
      visibleStyle = styles.hide
    }

    let menuClass = styles.menuTip + ' ' + visibleStyle

    return (
      <div className={menuClass}>
        <ul className={styles.contents}>
          {lists.map( item => 
            <li className={styles.contentsRow} key={item}>
              <Link onClick={() => this.props.onClickMenu()} to={item}>{item}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

MenuTip.defaultProps = {
  isShow: false
}

export default MenuTip
