import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import app from './app'

const AppState = combineReducers({
  routing: routerReducer,
  app
})

export default AppState
