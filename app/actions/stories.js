import {currentDateString} from "../utils/date";

export const LOAD_STORIES_PREVIEW = 'LOAD_STORIES_PREVIEW';
export const LOAD_STORY = 'LOAD_STORY';
export const STORY_LOADED = 'STORY_LOADED';
export const PREVIEW_LOADED ='PREVIEW_LOADED';
export const NO_IMPRESSION_FOR_DATE = 'NO_IMPRESSION_FOR_DATE';

export const loadStroiesPreview = () => ({
    type: LOAD_STORIES_PREVIEW,
});

export const loadStory = (date) => ({
    type: LOAD_STORY,
    date: date
});
