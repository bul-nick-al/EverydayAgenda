import {CHECK_USER_LOGGED_IN, IS_LOGGED, IS_NOT_LOGGED, LOGIN} from "../actions/authentication";


const initialState = {
    logged: false,
    isFetching: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHECK_USER_LOGGED_IN:
            return {
                ...state,
                isFetching: true
            };

        case IS_NOT_LOGGED:
            return {
                ...state,
                logged: false,
                isFetching: false
            };
        case IS_LOGGED:
            return {
                ...state,
                token: action.token,
                logged: true,
                isFetching: false
            };

        case LOGIN:
        default:
            return state;
    }
};
