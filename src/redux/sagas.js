import { takeEvery, put, call } from 'redux-saga/effects'
import { actions } from './action-types'
import axios from 'axios'

export function* defSaga(){
    yield takeEvery(actions.REQUEST, function*(){
        try{
            const res = yield call(axios.get,'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
            if(res.status === 200){
                yield put({
                    type:actions.SUCCESS,
                    data:res.data
                })
            }   
        }catch(error){

        }
    })
}