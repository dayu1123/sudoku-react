import {createStore,applyMiddleware, compose} from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import board from './reducer/board'
import thunk from 'redux-thunk'
import rootSaga from './saga/board'


const sagaMiddleware = createSagaMiddleware() 
const middleware = [thunk, sagaMiddleware]
export default function configureStore () {
  const store = createStore(board, compose(applyMiddleware(...middleware)))
  sagaMiddleware.run(rootSaga)
  return store
}
// const configureStore = (initialState, service = []) => {
  
// }