import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/containers/App';
import rootReducer from './main/reducer';

const initialState = {};

export const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);