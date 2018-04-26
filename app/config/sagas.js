import {takeEvery, call, put, select} from 'redux-saga/effects'
import {CHECK_USER_LOGGED_IN, IS_LOGGED, IS_NOT_LOGGED, LOGIN} from "../actions/authentication";
import {AsyncStorage} from 'react-native';
import {
    generateImageRequest,
    generateVideoRequest,
    loadImpressionFromServer,
    authorizeUser,
    loadStoryPreview, sendImage, sendVideo, sendText
} from "../utils/clienRest";
import {
    CHECK_TODAY_IMPRESSION_SUBMITTED,
    IMPRESSION_LOADED,
    LOAD_IMPRESSION,
    NO_IMPRESSION_FOR_DATE, SEND_IMPRESSION, SEND_IMPRESSION_FINISHED, sendImpression
} from "../actions/impression";
import {DATE_CHANGE, INITIAL_DATE, NEXT_DATE, PREVIOUS_DATE} from "../actions/calendar";
import store from '../config/store';
import {LOAD_STORIES_PREVIEW, LOAD_STORY, PREVIEW_LOADED, STORY_LOADED} from "../actions/stories";
import {currentDateString} from "../utils/date";

const TOKEN = 'token';
const getItemFromStorage = (item) => AsyncStorage.getItem(item);

function* fetchLocalAuthenticationToken() {
    try {
        // yield AsyncStorage.clear();
        // yield call([AsyncStorage, 'setItem'], '@AppLocalStorage:token', token)
        // yield AsyncStorage.setItem('token','hii');
        // let token = yield call([AsyncStorage, 'getItem'], 'token');
        let token = yield call(getItemFromStorage, TOKEN);

        if (token === null) {
            yield put({type: IS_NOT_LOGGED})
        } else {
            yield put({type: IS_LOGGED, token: token});
            // yield put({type: INITIAL_DATE});


        }
    } catch (e) {
        console.error(e, 'token fetch failed')
    }
}

function* authorise(action) {
    try {
        let token = yield authorizeUser(action.login, action.password);
        yield AsyncStorage.setItem('token', token);
        yield put({type: CHECK_USER_LOGGED_IN})
    } catch (e) {
        console.error(e, 'authorization failed')
    }
}

function* loadPreviews(action) {
    try {
        let previews = yield loadStoryPreview(store.getState().calendar.date);

        previews = previews.filter(item => item.imageid !== '-1');
        console.log(previews);
        yield put({type: PREVIEW_LOADED, previews: previews})
    } catch (e) {
        console.log('hey');

    }


}

function* loadStory(action) {
    try {
        let impression = yield loadImpressionFromServer(store.getState().stories.date);
        if (impression.exists) {
            yield put({type: STORY_LOADED, story: impression})
        } else {
            yield put({type: NO_IMPRESSION_FOR_DATE})
        }

    } catch (e) {
        console.log('hey');

    }
}

function* submitImpression(action) {
    try {
        action.imageURI !== null ? yield sendImage(action.imageURI):{};
        action.videoURI !== null ? yield sendVideo(action.videoURI):{};
        action.text !== '' ? yield sendText(action.text):{};
        yield setTimeout(()=>{},1500);
        yield put({type: DATE_CHANGE, date: currentDateString()});
    } catch (e) {
        console.log('hey');

    }
}

function* loadImpression() {
    try {
        yield put({type: LOAD_IMPRESSION});
        let impression = yield loadImpressionFromServer();
        console.log(impression);
        if (impression.exists) {
            yield put({type: IMPRESSION_LOADED, impression: impression});
            if (store.getState().calendar.date === currentDateString()) {
                yield put({type: CHECK_TODAY_IMPRESSION_SUBMITTED, todayImpressionSubmitted: impression.exists})
            }
        } else {
            yield put({type: NO_IMPRESSION_FOR_DATE})
        }


    } catch (e) {
        console.log('hey');

    }
}

const rootSaga = function* () {
    yield takeEvery(CHECK_USER_LOGGED_IN, fetchLocalAuthenticationToken);
    yield takeEvery(LOGIN, authorise);
    yield takeEvery(DATE_CHANGE, loadImpression);
    yield takeEvery(NEXT_DATE, loadImpression);
    yield takeEvery(PREVIOUS_DATE, loadImpression);
    yield takeEvery(LOAD_STORIES_PREVIEW, loadPreviews);
    yield takeEvery(LOAD_STORY, loadStory);
    yield takeEvery(SEND_IMPRESSION, submitImpression)
};

export default rootSaga;