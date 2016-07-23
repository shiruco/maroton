import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import router from './router' 
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Base from './containers/Base'


import style from '../scss/main.css.scss'

let store = configureStore()

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        {router}
  	  </Router>
    </Provider>
  </div>,
  document.getElementById("root")
);
