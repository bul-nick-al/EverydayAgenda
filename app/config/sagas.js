import { takeEvery, call, put, select} from 'redux-saga/effects'
import {CHECK_USER_LOGGED_IN, IS_LOGGED, IS_NOT_LOGGED, LOGIN} from "../actions/authentication";
import {AsyncStorage} from 'react-native';
import {generateImageRequest, generateVideoRequest, loadImpressionFromServer} from "../utils/clienRest";
import {IMPRESSION_LOADED, LOAD_IMPRESSION} from "../actions/impression";
import {DATE_CHANGE, INITIAL_DATE, NEXT_DATE, PREVIOUS_DATE} from "../actions/calendar";
import store from '../config/store';

const TOKEN = 'token';
const getItemFromStorage  = (item) => AsyncStorage.getItem(item);

function* fetchLocalAuthenticationToken(){
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
    yield AsyncStorage.setItem('token', action.login);

    yield put({type: CHECK_USER_LOGGED_IN})
}

function* loadImpression() {
    console.log(store.getState().calendar.date);
    yield put({type: LOAD_IMPRESSION});
    // let impressionn= yield loadImpressionFromServer(action.date);
    // let x = yield impressionn.json();
    // let text = 'hey';
    // console.warn(generateVideoRequest(x.videoid));
     // let impression = {
     //     imageid: generateImageRequest(x.imageid),
     //     videoid: 'https://dzesov.me/media/video.mp4',
     //     text: x.text
     // };
    let impression = {
        imageid: 'http://www.mit.edu/files/images/homepage/default/mit_spotlight.jpg?v=1524542409',
        videoid: 'https://cs513219.vkuservideo.net/u9663508/videos/c859b168d8.240.mp4',
        text: 'test'
    };
    // let impressionJSON = yield impression.json();

    yield put({type: IMPRESSION_LOADED, impression: impression})
}

const rootSaga =  function* () {
    yield takeEvery(CHECK_USER_LOGGED_IN, fetchLocalAuthenticationToken);
    yield takeEvery(LOGIN, authorise);
    yield takeEvery(DATE_CHANGE, loadImpression);
    yield takeEvery(NEXT_DATE, loadImpression);
    yield takeEvery(PREVIOUS_DATE, loadImpression);
};

export default rootSaga;