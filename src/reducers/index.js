/*
index.js is there to allow all reducers to be comboned using the 'combine reducers' feature
*/
import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

//imports bring in the reducer - you can name them anything you like here, this is what it is called in the store
const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : loggedReducer
})

export default allReducers;
