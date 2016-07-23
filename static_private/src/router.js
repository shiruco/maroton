import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Base from './containers/Base/Base';
import Top from './containers/Top/Top';
import About from './containers/About/About';
import Job from './containers/Job/Job';

export default (
  <Route path="/" component={Base}>
    <IndexRoute component={Top}/>
    <Route path="top" component={Top}/>
    <Route path="about" component={About}/>
    <Route path="job" component={Job}/>
  </Route>
);