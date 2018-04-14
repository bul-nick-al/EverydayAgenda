import {OPEN_CALENDAR} from "../actions/impression";


const initialState = {
    pickedDate: new Date(),
    todayImpressionSubmitted: false,
    impressionIsLoaded: false,
    impression:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CALENDAR:

    }
}