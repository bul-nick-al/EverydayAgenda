import {IMPRESSION_LOADED, LOAD_IMPRESSION} from "../actions/impression";


const initialState = {
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
                impression: action.impression
            }
        }
        default: return state

    }
}