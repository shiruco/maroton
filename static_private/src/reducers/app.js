const app = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_SPINNER':
      console.log(action)
      return Object.assign({}, state, {
        isShow: action.isShow
      })
    default:
      return state
  }
}

export default app