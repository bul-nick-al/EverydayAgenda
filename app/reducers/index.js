import { combineReducers } from 'redux';
import authentication from './authentication'
import calendar from "./calendar";

export default combineReducers({
    authentication, calendar
});