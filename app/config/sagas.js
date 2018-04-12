import {AsyncStorage} from "react-native";
import { takeEvery , select, call, put} from 'redux-saga/effects'
import {CHECK_USER_LOGGED_IN, IS_LOGGED, IS_NOT_LOGGED} from "../actions/authentication";

const TOKEN = 'token';
const getItemFromStorage = (itemName) => (AsyncStorage.getItem(itemName));

function* fetchLocalAuthenticationToken(){
    try {
        // yield AsyncStorage.setItem('token','hii');
        // let token = yield call(getItemFromStorage, TOKEN);
        if (true) {
            yield put({type: IS_NOT_LOGGED})
        } else {
            yield put({type: IS_LOGGED, token: token})
        }
    } catch (e) {
        console.error(e, 'token fetch failed')
    }
}

export default function* rootSaga() {
    yield takeEvery(CHECK_USER_LOGGED_IN, fetchLocalAuthenticationToken)
}