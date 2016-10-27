import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import styles from './About.css'

let About = ({ dispatch }) => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.titleWrapper}>About_Maroton</div>
      <div>
        <div className={styles.subTitleWrapper}>
          <div className={styles.subTitle}>marotonについて</div>
        </div>
        <div className={styles.detail}>
          <p>marotonはwebサイトおよびwebアプリケーションの企画・開発を中心に事業を行っております。</p>
          <p>お客様と一緒に素晴らしいプロダクトを世界に向けて発信していければと思います。</p>
        </div>
        <div className={styles.subTitleWrapper}>
          <p className={styles.subTitle}>事業領域</p>
        </div>
        <div className={styles.detail}>
          <p>webサイト,webアプリケーションおよび</p>
          <p>スマートフォンアプリケーションの企画・開発・運用</p>
        </div>
        <div className={styles.detail}>
          <p>グラフィックデザイン・映像制作・楽曲制作</p>
          <p>アニメーション制作など</p>
        </div>
      </div>
    </div>
  )
}

export default connect()(About)
