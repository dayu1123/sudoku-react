import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Spin } from 'antd';
// import './App.css';
import Board from '../component/board';
import Keyboard from '../component/keyboard';
import Header from '../component/Header';
import { setCurrentDifficulty, getBoardTypeRequest, setSelectedBoard, solveBoardTypeRequest, resetBoardForm, setBoardAfterErase, setBoardAfterClickNumbpad, setBoardArrayForm} from "../store/action/board"
function Home(props) {
  const [boardForm, setBoardForm] = useState([])
  const {isLoading} = useSelector((state) => state)
  const { setBoardArrayForm, board, onFocusBoard }= props
  const handleChangeBoard = (value, indexParent, indexChild) => {
    // console.info(value, indexChild, indexParent)
    if(onFocusBoard?.length) {
      if(!board?.[onFocusBoard?.[1]][onFocusBoard?.[0]]){
        if(/^[1-9][1-9]{0,5}$/.test(value) || !value){
          let temp = boardForm
          temp[indexParent][indexChild] = String(value).length > 1 ?  String(value)[0] === String(value)[1] ? 0 : +String(value)[value.length - 1] : +value		
          // console.info(temp, '<<<< temp')
          setBoardForm([...temp])
          setBoardArrayForm([...temp])
        }
      }
    }
  }
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column'}}>
    {!isLoading ? 
      <div className="container-header">
        <Header></Header>
      </div>
      : null
    }
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Board handleChangeBoard={handleChangeBoard} boardForm={boardForm} setBoardForm={setBoardForm}/>
        {
          !isLoading ?
          <Keyboard handleClickNumpad={handleChangeBoard}/> : null
        }
      </div>
    </div>
    </>
  )
}
const mapStateToProps = (state) => ({
	board: state.boardArray,
	currentDifficulty: state.currentDifficulty,
	boardArrayForm: state.boardArrayForm,
  onFocusBoard: state.onFocusBoard,
  isLoading: state.isLoading
})
const mapDispatchToProps = (dispatch) => ({
	setBoardArrayForm: (payload) => dispatch(setBoardArrayForm(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)