import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { browserHistory, Route } from 'react-router';

const Routes = () => (
  <Router history={browserHistory} basename={'/'}>
    <Switch>
      {/* 
        Add all your routes here

        Example
        <Route path="/" component={Home} />
        <Route component={notFound} />
      */}
    </Switch>
  </Router>
);

export default Routes;
