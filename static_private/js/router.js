import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Base from './containers/Base';
import Top from './containers/Top';
import About from './containers/About';
import Job from './containers/Job';

export default (
  <Route path="/" component={Base}>
    <IndexRoute component={Top}/>
    <Route path="top" component={Top}/>
    <Route path="about" component={About}/>
    <Route path="job" component={Job}/>
  </Route>
);