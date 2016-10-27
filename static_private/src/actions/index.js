//インジケータ表示制御
export const showSpinner = (isShow) => {
  return {
    type: 'SHOW_SPINNER',
    isShow
  }
}
//メニュー表示制御
export const showMenu = (isShow) => {
  return {
    type: 'SHOW_MENU',
    isShow
  }
}