import { combineReducers } from 'redux';
import authentication from './authentication'
import calendar from "./calendar";
import impression from "./impression";
import stories from './stories'

export default combineReducers({
    authentication, calendar, impression, stories
});