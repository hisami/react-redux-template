import axios from 'axios'
import * as ActionTypes from '../constants/actionTypes'
import {call, fork, takeLatest, put} from 'redux-saga/effects'
import {fetchApiSucceeded} from "~/actions/api";

function fetchCityCode() {
    const URL = `http://www.land.mlit.go.jp/webland/api/CitySearch?area`
    console.log('fetchCity')
    return axios.get(URL).then(response => {
        console.log(response)
        return response
    })
}

function* fetchPostCode(action) {
    const { data } = yield call(fetchCityCode)
    yield put(fetchApiSucceeded(data.status))
}

export default function* rootSaga() {
    yield takeLatest(ActionTypes.FETCH_API_REQUESTED, fetchPostCode)
}
