const app = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MENU':
      return Object.assign({}, state, {
        isShowMenu: action.isShow
      })
    case 'SHOW_SPINNER':
      return Object.assign({}, state, {
        isShowSpinner: action.isShow
      })
    default:
      return state
  }
}

export default app