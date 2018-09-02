import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { browserHistory, Route } from 'react-router';
import Home from '../components/Home';

const Routes = () => (
  <Router history={browserHistory} basename={'/'}>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
