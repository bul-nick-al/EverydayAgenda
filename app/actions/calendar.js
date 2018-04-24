import {currentDateString} from "../utils/date";
import store from '../config/store';

export const DATE_CHANGE = 'DATE_CHANGE';
export const NEXT_DATE = 'NEXT_DATE';
export const PREVIOUS_DATE = 'PREVIOUS_DATE';
export const INITIAL_DATE = 'INITIAL_DATE';

export const initialDate = () => ({
    type: INITIAL_DATE,
    date: currentDateString()
});

export const dateChange = (newDate) => ({
    type: DATE_CHANGE,
    date: newDate
});

export const nextDate = () => ({
    type: NEXT_DATE,
});

export const previousDate = () => ({
    type: PREVIOUS_DATE,
});