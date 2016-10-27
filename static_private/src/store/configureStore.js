import { routerMiddleware } from 'react-router-redux';
import { createStore, compose, applyMiddleware} from 'redux'
import AppState from '../reducers'
import { devTools } from 'redux-devtools'
import { Router, browserHistory } from 'react-router';

const reduxReactRouterMiddleware = routerMiddleware(browserHistory);

const finalCrateStore = compose(
  applyMiddleware(reduxReactRouterMiddleware)
)(createStore);

export default function configureStore(initialState) {
  const store = finalCrateStore(AppState, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}
