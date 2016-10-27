import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import MenuTip from '../../containers/MenuTip/MenuTip'
import logoImg from '../../../images/logo.png'
import menuImg from '../../../images/menu.png'
import styles from './Header.css'
import helperStyles from '../../Helper.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lists = ['top','about','job']

    let headerClass = styles.header + ' ' + styles.fixed + ' ' + helperStyles.dfl;

    return (
      <header className={headerClass}>
        <MenuTip />
        <div className={styles.logo}>
          <img src={logoImg} width={130} />
        </div>
        <div className={styles.menuIcon}>
          <img src={menuImg} width={30} height={30} onClick={() => this.props.onClickMenuIcon(
              !this.props.app.isShowMenu
          )} />
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
