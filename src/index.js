import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
install packages redux & react-redux
create store allows creation of store which is the global source of state
Provider wraps the app and allows all components in the app access to the store
All reducer brings in however many reducers have been defined
*/
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux'


//line 20 added to enable Redux Chrome Dev tools extension
const store = createStore(
  allReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);
