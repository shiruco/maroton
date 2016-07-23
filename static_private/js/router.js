import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Base from './containers/Base';
import Page from './containers/Page';
import Hoge from './containers/Hoge';
import Fuga from './containers/Fuga';
import Piyo from './containers/Piyo';
import Moga from './containers/Moga';

export default (
  <Route path="/" component={Base}>
  	<IndexRoute component={Page}/>
  	<Route path="hoge" component={Hoge} >
  	  <Route path="piyo" component={Piyo}/>
  	</Route>
  	<Route path="fuga" component={Fuga}/>
  	<Route path="piyo" component={Piyo}/>
  	<Route path="moga" component={Moga}/>
  </Route>
);