import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { showSpinner } from '../../actions'
import logoImg from '../../../images/logo.png'

import styles from './Header.css'
import helperStyles from '../../Helper.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lists = ['top','about','job']

    console.log(this.props)

    let headerClass = styles.header + ' ' + styles.fixed + ' ' + helperStyles.dfl;

    return (
      <header className={headerClass}>
        <div className={styles.logo}>
          <img src={logoImg} width={130} />
        </div>
        <div className={styles.menu}>
          <ul className={helperStyles.dfl}>
            {lists.map( item => 
              <li className={styles.menuList} key={item}>
                <Link onClick={() => this.props.onClickMenu()} to={item}>{item}</Link>
              </li>
            )}
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
