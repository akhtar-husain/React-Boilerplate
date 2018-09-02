import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/configure-store';
import { PersistGate } from 'redux-persist/es/integration/react';
import auth  from './redux/auth/action';

import Routes from './routes';
import { Loader } from './components/Common/Loader';

// store.dispatch(auth.authCheck());

render(
    <Provider store={store}>
        <PersistGate loading={<Loader loading={true} />} persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);


