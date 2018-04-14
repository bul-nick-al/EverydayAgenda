import {DATE_CHANGE} from "../actions/calendar";
import moment from "moment";

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
        default:
            return state
    }
}