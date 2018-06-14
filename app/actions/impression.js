import {currentDateString} from "../utils/date";

export const LOAD_IMPRESSION = 'LOAD_IMPRESSION';
export const IMPRESSION_LOADED ='IMPRESSION_LOADED';

export const loadImpression = (date) => ({
    type: LOAD_IMPRESSION,
    date: date
});

export const loadInitialImpression = () => ({
    type: LOAD_IMPRESSION,
    date: currentDateString()
});