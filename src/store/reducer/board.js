import * as ActionType from '../constant/board'

const initialState = { 
  boardArray: [],
  difficult: 'easy',
  isLoading: false,
  currentDifficulty: 'easy',
  validate: 'unsolved',
  boardArrayForm: [],
  previousBoardArrayForm: [],
  onFocusBoard: []
}

export default  (state = initialState, action) => {
  const { type, payload } = action;
  switch(action.type){
    case ActionType.GET_BOARD_REQUEST: {
     return {
      ...state,
      isLoading: true
     } 
    }
    case ActionType.SET_BOARD_ARRAY_FORM: {
      return {
        ...state,
        boardArrayForm: payload
      }
    }
    case ActionType.SET_CURRENT_DIFFICULTY: {
      return {
        ...state,
        currentDifficulty: payload
      }
    }
    case ActionType.GET_BOARD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        boardArray: payload,
        boardArrayForm: payload,
        validate: 'unsolved'
      }
    }
    case ActionType.GET_BOARD_FAILED: {
      return {
        ...state,
        error: payload,
        isLoading: false
      }
    }
    case ActionType.VALIDATE_BOARD_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ActionType.VALIDATE_BOARD_SUCCESS: {
      return {
        ...state,
        validate: payload,
        isLoading: false
      }
    }
    case ActionType.VALIDATE_BOARD_FAILED: {
      return {
        ...state,
        error: payload,
        isLoading: false
      }
    }
    case ActionType.SOLVE_BOARD_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ActionType.SOLVE_BOARD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        // boardArray: payload.solution,
        boardArrayForm: payload.solution,
        validate: payload.status,
        currentDifficulty: payload.difficulty
      }
    }
    case ActionType.GET_BOARD_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    }
    case ActionType.RESET_BOARD_ARRAY_FORM: {
      return {
        ...state,
        boardArrayForm: [...state.boardArray]
      }
    }
    case ActionType.SET_BOARD_AFTER_ERASE: {
      const tempArrayBoard = [...state.boardArrayForm]
      if(!state.boardArray[payload?.[1]][payload?.[0]]){
        tempArrayBoard[payload?.[1]][payload?.[0]] = 0
      }
      return {
        ...state,
        boardArrayForm: tempArrayBoard
      }
    }
    case ActionType.SET_SELECTED_BOARD: {
      return {
        ...state,
        onFocusBoard: payload
      }
    }
    case ActionType.SET_BOARD_AFTER_CLICK_NUMBPAD: {
      const tempArrayBoard = [...state.boardArrayForm]
      if(!state.boardArray[payload?.onFocusBoard?.[1]][payload?.onFocusBoard?.[0]]){
        tempArrayBoard[payload?.onFocusBoard?.[1]][payload?.onFocusBoard?.[0]] = +payload?.value
      }
      console.info(tempArrayBoard,payload,  '<<<M apa nih')
      return  {
        ...state,
        boardArrayForm: tempArrayBoard
      }
    }
    default: {
      return state
    }
  }
}