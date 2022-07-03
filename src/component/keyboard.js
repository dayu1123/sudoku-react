import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentDifficulty, getBoardTypeRequest, validateBoardTypeRequest, solveBoardTypeRequest, resetBoardForm, setBoardAfterErase, setBoardAfterClickNumbpad} from "../store/action/board"
// import { getBoardRequest } from "../store/saga/board";


// function Keyboard() {
//   return (
//     // <div className="container-keyboard">
    
//     // </div> 
//   )
// }

function Menu(props) {
  const {board, boardArrayForm, currentDifficulty, validate, setCurrentDifficulty, getBoardRequest, validateBoardRequest, solveBoardRequest, resetBoard, onFocusBoard, setBoardAfterErase, handleClickNumpad} = props
  const [displayDropdown, setDisplayDropdown] = useState(false)
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const handleClickButtonNewGame = () => {
    setDisplayDropdown(!displayDropdown)
  }
  const handleClickMenuNewGame = (_, value) => {
    getBoardRequest(value)
    if(value !== 'random'){
      setCurrentDifficulty(value)
    }
    handleClickButtonNewGame()
  }
  const handleClickValidateButton = () => {
    validateBoardRequest(boardArrayForm)
  }
  const handleClickSolveButton = () => {
    solveBoardRequest(board)
  }
  const handleClickReset = () => {
    console.info('click reset')
    resetBoard()
  }
  const handleClickErase = () => {
    console.info('click etrase', onFocusBoard, boardArrayForm)
    setBoardAfterErase(onFocusBoard)
  }
  // const handleClickNumpad = (value) => {
  //   console.info(onFocusBoard, '<<<< focus')
  //   if(onFocusBoard?.length){
  //     setBoardAfterClickNumbpad({value, onFocusBoard})
  //   }
  // }
  return (
    <div className="menu-container">
      {/* <div className="info-container">
        <div className="difficulty-container">
          <div className="header-difficulty"> Difficulty: </div>
          <div className="current-difficulty">
            {currentDifficulty}
          </div>
        </div>
        <div className="validate-container">
          <div className="validate-header">
            Validate: 
          </div>
          <div className="validate-value">
            {validate}
          </div>
        </div>
      </div> */}
      <div className="container-button-new-game">
        <button className="new-game-button" onClick={handleClickButtonNewGame}>New Game</button>
        <div className={displayDropdown ? 'dropdown-menu display' : 'dropdown-menu'} >
          <div className="button-newgame-menu" onClick={(_) => handleClickMenuNewGame(_, 'easy')}>
            Easy
          </div >
          <div className="button-newgame-menu" onClick={(_) => handleClickMenuNewGame(_, 'medium')}>
            Medium
          </div>
          <div className="button-newgame-menu" onClick={(_) => handleClickMenuNewGame(_, 'hard')}>
            Hard
          </div>
          <div className="button-newgame-menu" onClick={(_) => handleClickMenuNewGame(_, 'random')}>
            Random
          </div>
        </div>
      </div>
      
      <div className="container-button-menu">
        <div>
          <button className="validate-button" onClick={handleClickValidateButton}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0072E3" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
          </button>
          <p className="text-validate-button" onClick={handleClickValidateButton}>
             Validate
          </p>
        </div> 
        <div>
          <button className="erase-button" onClick={handleClickErase}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-game-control" viewBox="0 0 30 31"><path fill="#0072E3" fill-rule="evenodd" d="M27.13 25.11a1 1 0 01.12 2h-6.9a1 1 0 01-.11-2H27.13zM21.48 4.08l.17.14.16.15 3.76 3.76a4 4 0 01.15 5.5l-.15.16-11.32 11.32h2.04a1 1 0 011 .89v.11a1 1 0 01-.88 1H6.52a3 3 0 01-1.98-.74l-.14-.14-2.23-2.22a4 4 0 01-.15-5.5l.15-.16L16.15 4.37a4 4 0 015.33-.29zm-11.52 9.3l-6.38 6.38a2 2 0 00-.11 2.7l.11.13 2.23 2.23a1 1 0 00.58.28l.13.01h4.9l5.13-5.13-6.59-6.6zm7.87-7.82l-.14.1-.13.13-6.18 6.18 6.59 6.6 6.19-6.2a2 2 0 00.11-2.7l-.11-.12-3.77-3.76a2 2 0 00-2.56-.22z"></path></svg>
          </button>
          <p className="text-erase-button" onClick={handleClickErase}>
            Erase
          </p>
        </div>
        <div>
          <button className="hint-button" onClick={handleClickSolveButton}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon-game-control" viewBox="0 0 30 31"><path fill="#0072E3" d="M17.3 25.91c.5 0 .91.48.91 1.08 0 .59-.4 1.07-.91 1.07h-4.6c-.5 0-.91-.48-.91-1.07 0-.6.4-1.08.91-1.08zM15 2.34a9.68 9.68 0 019.64 9.71c0 3.5-1.86 6.7-4.83 8.41-.23.14-.4.39-.5.82a3.21 3.21 0 01-3.13 2.5H13.5a3.21 3.21 0 01-3.17-2.68c-.08-.45-.17-.65-.12-.62a9.72 9.72 0 01-4.85-8.43c0-5.36 4.31-9.7 9.64-9.7zm0 2.15a7.53 7.53 0 00-7.5 7.56 7.57 7.57 0 003.78 6.57c.65.38.99 1.1 1.16 2.12.1.51.54.89 1.06.89h2.68c.5 0 .94-.35 1.05-.83.23-.98.73-1.73 1.5-2.19a7.57 7.57 0 003.77-6.56A7.53 7.53 0 0015 4.5z"></path></svg>
          </button>
          <p className="text-hint-button" onClick={handleClickSolveButton}>
            Solve
          </p>
        </div>
        <div>
          <button className="reset-button" onClick={handleClickReset}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#0072E3" d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"/></svg>
          </button>
          <p className="text-reset-button" onClick={handleClickReset}>
            Reset
          </p>
        </div>
      </div>
      <div className="container-keyboard">
      <>
        {number.map(el => {
          return (
            <button className="number-container" key={el} onClick={(_) => handleClickNumpad(el, onFocusBoard?.[1], onFocusBoard?.[0])}>
              <p className="number">{el}</p>
            </button>  
          )
        })}
      </>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  currentDifficulty: state.currentDifficulty,
  validate: state.validate,
  boardArrayForm: state.boardArrayForm,
  board: state.boardArray,
  onFocusBoard: state.onFocusBoard
})

const mapDispatchToProps= (dispatch) => ({
  setCurrentDifficulty: (payload) => dispatch(setCurrentDifficulty(payload)),
  getBoardRequest: (payload) => dispatch(getBoardTypeRequest(payload)),
  validateBoardRequest: (payload) => dispatch(validateBoardTypeRequest(payload)),
  solveBoardRequest: (payload) => dispatch(solveBoardTypeRequest(payload)),
  resetBoard: () => dispatch(resetBoardForm()),
  setBoardAfterErase: (payload) => dispatch(setBoardAfterErase(payload)),
  setBoardAfterClickNumbpad: (payload) => dispatch(setBoardAfterClickNumbpad(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)