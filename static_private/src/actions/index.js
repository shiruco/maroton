//インジケータ表示制御
export const showSpinner = (isShow) => {
  return {
    type: 'SHOW_SPINNER',
    isShow
  }
}