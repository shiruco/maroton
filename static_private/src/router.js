import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import Top from './containers/Top/Top';
import About from './containers/About/About';
import Job from './containers/Job/Job';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Top}/>
    <Route path="top" component={Top}/>
    <Route path="about" component={About}/>
    <Route path="job" component={Job}/>
  </Route>
);