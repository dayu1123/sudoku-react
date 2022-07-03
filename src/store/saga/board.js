import {
  all,
  call,
  fork,
  put,
  race,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  getBoardTypeSuccess,
  getBoardTypeFailed,
  setCurrentDifficulty,
  validateBoardTypeSuccess,
  validateBoardTypeFailed,
  solveBoardTypeSuccess,
  solveBoardTypeFailed
} from '../action/board'
import * as ActionType from '../constant/board';
import * as Api from '../../api/board';



function* getListBoardRequest({payload}) {
  try {
    const result = yield call(Api.fetchBoardList, payload)
    // console.info(result)
    if(result.status === 200){
      if(payload === 'random'){
        const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
        const encodeParams = (params) => {
          console.info(params, '<<< apa nih')
          return Object.keys(params)
          .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
          .join('&');
        }

        // const payloadGrade = new FormData()
        // payloadGrade.append('board', encodeParams(result?.data))
        // console.info(payloadGrade, '<<<< payload grade')
        const resultGrade = yield call(Api.fetchBoardGrade, encodeParams(result?.data))
        if(resultGrade.status === 200){
          yield put(setCurrentDifficulty(resultGrade.data?.difficulty))
        }
      }
      yield put(getBoardTypeSuccess(result?.data?.board))
    }
  } catch (error) {
    yield put(getBoardTypeFailed(error))
    console.info(error)
  }
}

export function* getBoardRequest()  {
  yield takeLatest(ActionType.GET_BOARD_REQUEST, getListBoardRequest)
}

function* validateBoardRequest({payload}) {
  try {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
        const encodeParams = (params) => {
          return Object.keys(params)
          .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
          .join('&');
        }
        console.info(payload,' <<<<< ap')
    const result = yield call(Api.fetchBoardValidate, encodeParams({board: [...payload]}))
    if(result.status === 200){
      yield put(validateBoardTypeSuccess(result?.data?.status))
    }
  } catch (error) {
    yield put(validateBoardTypeFailed(error))
    console.info(error)
  }
}
export function* validateBoard() {
  yield takeEvery(ActionType.VALIDATE_BOARD_REQUEST, validateBoardRequest)
}
function* solveBoardRequest({payload}) {
  try {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
    const encodeParams = (params) => {
      return Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');
    }
    const result = yield call(Api.fetchBoardSolve, encodeParams({board: [...payload]}))
    if(result.status ===  200){
      yield put(solveBoardTypeSuccess(result?.data))
    }
  } catch (error) {
    yield put(solveBoardTypeFailed(error))
  }
}
export function* solveBoard() {
  yield takeEvery(ActionType.SOLVE_BOARD_REQUEST, solveBoardRequest)
}
export default function* rootSaga() {
  yield all([fork(getBoardRequest), fork(validateBoard), fork(solveBoard)])
}