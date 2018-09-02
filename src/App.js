import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/configure-store';
import { PersistGate } from 'redux-persist/es/integration/react';

import Routes from './routes';
import { Loader } from './components/Common/Loader';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader loading={true} />} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;


