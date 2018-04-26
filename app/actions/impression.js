import {currentDateString} from "../utils/date";

export const LOAD_IMPRESSION = 'LOAD_IMPRESSION';
export const IMPRESSION_LOADED ='IMPRESSION_LOADED';
export const NO_IMPRESSION_FOR_DATE = 'NO_IMPRESSION_FOR_DATE';
export const SEND_IMPRESSION = 'SEND_IMPRESSION';
export const CHECK_TODAY_IMPRESSION_SUBMITTED = 'CHECK_TODAY_IMPRESSION_SUBMITTED';
export const SEND_IMPRESSION_FINISHED ='SEND_IMPRESSION_FINISHED';

export const loadImpression = (date) => ({
    type: LOAD_IMPRESSION,
    date: date
});

export const sendImpression = (imageURI, videoURI, text) => ({
    type: SEND_IMPRESSION,
    imageURI: imageURI,
    videoURI: videoURI,
    text: text
});

export const loadInitialImpression = () => ({
    type: LOAD_IMPRESSION,
    date: currentDateString()
});