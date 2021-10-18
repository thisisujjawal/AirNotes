import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import reducer from './redux/Reducers';
import {Provider} from 'react-redux';
const redux = require('redux');

const store = redux.createStore(reducer , redux.applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
