import { createStore, applyMiddleware } from 'redux'
import { fetchData } from './reducers'
import { defSaga } from './sagas'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(fetchData, composeEnhancer(applyMiddleware(saga)))
export default store

saga.run(defSaga)