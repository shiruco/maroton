import React from 'react'
import '../../canvas/CanvasLogic'

import styles from './Canvas.css'

const Canvas = () => (
  <div id="canvasWrapper" className={styles.canvasWrapper}>
    <canvas id="canvas" resize="true"></canvas>
  </div>
)

export default Canvas
