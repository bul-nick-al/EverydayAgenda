import {
    CHECK_TODAY_IMPRESSION_SUBMITTED,
    IMPRESSION_LOADED,
    LOAD_IMPRESSION,
    NO_IMPRESSION_FOR_DATE, SEND_IMPRESSION, SEND_IMPRESSION_FINISHED
} from "../actions/impression";


const initialState = {
    impressionExists: false,
    isFetching: true,
    todayImpressionSubmitted: false,
    impression: {
        imageid: '',
        videoid: '',
        text: ''
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_IMPRESSION:
            return{
                ...state,
                isFetching: true,
            };
        case IMPRESSION_LOADED:{
            return{
                ...state,
                isFetching: false,
                impression: action.impression,
                impressionExists: true
            }
        }
        case NO_IMPRESSION_FOR_DATE:
            return {
                ...state,
                isFetching: false,
                impressionExists: false
            };
        case CHECK_TODAY_IMPRESSION_SUBMITTED:
            return {
                ...state,
                todayImpressionSubmitted: action.todayImpressionSubmitted
            };
        case SEND_IMPRESSION_FINISHED:
            return {
                ...state,
                todayImpressionSubmitted: true
            };
        default: return state

    }
}