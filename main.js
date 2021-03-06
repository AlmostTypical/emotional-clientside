import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './src/reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));