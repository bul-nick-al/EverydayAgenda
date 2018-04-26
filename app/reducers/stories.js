import {LOAD_STORIES_PREVIEW, LOAD_STORY, PREVIEW_LOADED, STORY_LOADED} from "../actions/stories";

const initialState = {
    isFetching: true,
    previews: [],
    story: {
        imageid: '',
        videoid: '',
        text: ''
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORIES_PREVIEW:
            return{
                ...state,
                isFetching: true
            };
        case PREVIEW_LOADED:
            return{
                ...state,
                isFetching: false,
                previews: action.previews
            };
        case LOAD_STORY:
            return{
                ...state,
                date: action.date,
                isStoryFetching: true
            };
        case STORY_LOADED:
            return{
                ...state,
                isStoryFetching: false,
                story: action.story
            };
        default: return state

    }
}