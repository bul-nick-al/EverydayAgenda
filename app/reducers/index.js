import { combineReducers } from 'redux';
import authentication from './authentication'
import calendar from "./calendar";
import impression from "./impression";

export default combineReducers({
    authentication, calendar, impression
});