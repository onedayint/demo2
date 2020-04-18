import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST, RESPONSE} from './action-types'
import axios from 'axios'

export function* defSaga(){
    yield takeEvery(REQUEST, function*(){
        console.log("saga")
        const res = yield call(axios.get,'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
        yield put({
            type:RESPONSE,
            data:res
        })
    })
}