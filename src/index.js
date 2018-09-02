import React from 'react';
import { render } from 'react-dom';
import App from './App';
import auth from './redux/auth/action';
import { store } from './redux/configure-store';

//process.env.NODE_ENV = NODE_ENV || 'development';

// store.dispatch(auth.authCheck());

render(
  <App />,
  document.getElementById('app')
);


