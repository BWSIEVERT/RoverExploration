import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



// Redux Imports
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// Redux Helpers
import { mainReducer } from './Redux-Store/Reducers'

// Redux State Store
const store = createStore(mainReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);