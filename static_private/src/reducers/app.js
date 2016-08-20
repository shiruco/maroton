const app = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_SPINNER':
      return Object.assign({}, state, {
        isShowSpinner: action.isShow
      })
    default:
      return state
  }
}

export default app