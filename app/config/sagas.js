import { takeEvery, call, put, select} from 'redux-saga/effects'
import {CHECK_USER_LOGGED_IN, IS_LOGGED, IS_NOT_LOGGED} from "../actions/authentication";

const TOKEN = 'token';
const getItemFromStorage  = () => fetch(`https://api.fixer.io/latest?base=USD`);

function* fetchLocalAuthenticationToken(){
    try {
        // yield call([AsyncStorage, 'setItem'], '@AppLocalStorage:token', token)
        // yield AsyncStorage.setItem('token','hii');
        // let token = yield call([AsyncStorage, 'getItem'], 'token');
        let token = yield call(getItemFromStorage);
        console.log('fetching ended');
        if (token === null) {
            yield put({type: IS_NOT_LOGGED})
        } else {
            yield put({type: IS_LOGGED, token: token})
        }
    } catch (e) {
        console.error(e, 'token fetch failed')
    }
}

const rootSaga =  function* () {
    yield takeEvery(CHECK_USER_LOGGED_IN, fetchLocalAuthenticationToken)
};

export default rootSaga;