import {DATE_CHANGE, NEXT_DATE, PREVIOUS_DATE} from "../actions/calendar";
import moment from "moment";
import {nextDateStringFromDate, previousDateString, previousDateStringFromDate} from "../utils/date";

const initialState = {
    date: moment(new Date()).format('YYYY-MM-DD')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DATE_CHANGE:
            return {
                ...state,
                date: action.date
            };
        case PREVIOUS_DATE:
            return {
                ...state,
                date: previousDateStringFromDate(state.date)
            };
        case NEXT_DATE:
            return {
                ...state,
                date: nextDateStringFromDate(state.date)
            };
        default:
            return state
    }
}