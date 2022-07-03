import * as ActionType from '../constant/board';

export const setCurrentDifficulty = (payload) => ({
  type: ActionType.SET_CURRENT_DIFFICULTY,
  payload
})

export const setBoardArrayForm = (payload) => ({
  type: ActionType.SET_BOARD_ARRAY_FORM,
  payload
})

export const getBoardTypeRequest = (payload) => {
  return {
    type: ActionType.GET_BOARD_REQUEST,
    payload
  }
}

export const getBoardTypeSuccess = (payload) => ({
  type: ActionType.GET_BOARD_SUCCESS,
  payload
})

export const getBoardTypeFailed = (payload) => ({
  type: ActionType.GET_BOARD_FAILED,
  payload
})

export const validateBoardTypeRequest = (payload) => ({
  type: ActionType.VALIDATE_BOARD_REQUEST,
  payload
})

export const validateBoardTypeSuccess = (payload) => ({
  type: ActionType.VALIDATE_BOARD_SUCCESS,
  payload
})

export const validateBoardTypeFailed = (payload) => ({
  type: ActionType.VALIDATE_BOARD_FAILED,
  payload
})

export const solveBoardTypeRequest = (payload) => ({
  type: ActionType.SOLVE_BOARD_REQUEST,
  payload
})

export const solveBoardTypeSuccess = (payload) => ({
  type: ActionType.SOLVE_BOARD_SUCCESS,
  payload
})

export const solveBoardTypeFailed = (payload) => ({
  type: ActionType.SOLVE_BOARD_FAILED,
  payload
})

export const resetBoardForm = (payload) => ({
  type: ActionType.RESET_BOARD_ARRAY_FORM,
  payload
})

export const setBoardAfterErase = (payload) => ({
  type: ActionType.SET_BOARD_AFTER_ERASE,
  payload
})

export const setSelectedBoard = (payload) => ({
  type: ActionType.SET_SELECTED_BOARD,
  payload
})

export const setBoardAfterClickNumbpad = (payload) => ({
  type:  ActionType.SET_BOARD_AFTER_CLICK_NUMBPAD,
  payload
})