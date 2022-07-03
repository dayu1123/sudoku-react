

import { Spin } from "antd"
import React, { useEffect, useState } from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils"
import { useDispatch, connect } from "react-redux"
import { getBoardTypeRequest, setBoardArrayForm, setSelectedBoard } from "../store/action/board"

function Board (props) {
	// const dispatch = useDispatch()
	const { board, boardForm,setBoardForm, isLoading, getBoardRequest, setBoardArrayForm, boardArrayForm, setSelectedBoard, handleChangeBoard} = props
	const [indexSelectBoardParent, setIndexSelectBoardParent] = useState(null)
	const [indexSelectBoardChild, setIndexSelectBoardChild] = useState(null)
	const [boxSelectedChild, setBoxSelectedChild] = useState(null)
	const [boxSelectedParent, setBoxSelectedParent] = useState(null)
	useEffect(() => {
		getBoardRequest('easy')
	}, [])

	useEffect(() => {
		if(boardArrayForm.length){
			const stringify = JSON.stringify(boardArrayForm)
			// console.info('masuk if useEffect', boardArrayForm)
			setBoardForm(JSON.parse(stringify))
			// setBoardArrayForm([...board])
		}
		// console.info(boardArrayForm, ':::::')
	}, [boardArrayForm])
	// const handleChange = (value, indexParent, indexChild) => {

	// 	console.info('masuk Onchange')
	
	// }
	const handleSelectBoard = (value, indexParent, indexChild) => {
		setSelectedBoard([indexChild, indexParent])
		const indexingBoxArray = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8]
		]
		// const box = [indexChild,]
		const tempBoxSelectedChild = []
		const tempBoxSelectedParent = []
		indexingBoxArray.filter(el => {
			if(el?.includes(indexChild)){
				tempBoxSelectedChild.push(el)
			}
			if(el?.includes(indexParent)){
				tempBoxSelectedParent.push(el)
			}
		})
		setBoxSelectedChild(tempBoxSelectedChild?.[0])
		setBoxSelectedParent(tempBoxSelectedParent?.[0])
		setIndexSelectBoardChild(indexChild)
		setIndexSelectBoardParent(indexParent)
		// const boardSelect = board.map((el, i) => {
		// 	if(boxMapping.includes(i)){
				
		// 	}
		// })
		
	}
	const classBox = (indexChild, indexParent, valueBoard) => {
		let classResult = ''
		// selection
		if(indexChild === indexSelectBoardChild && indexParent === indexSelectBoardParent){
			classResult += 'selected'
		} 
		// selection box
		// console.info(boxSelectedChild?.includes(indexChild))
		if(boxSelectedChild?.includes(indexChild) && boxSelectedParent?.includes(indexParent)){
			if(indexChild === indexSelectBoardChild && indexParent === indexSelectBoardParent) {}
			else {
				classResult += 'box-selected'
			}
		} 
		if(indexChild === indexSelectBoardChild || indexParent === indexSelectBoardParent){
			if(classResult !== 'selected'){
				if(!classResult){
					classResult += 'box-selected'
				}
			}
		}
		if(!valueBoard){
			// console.info(board?.[indexParent][indexChild])
			classResult += ' text-shadow-blue'
		}
		// selection row
		// if(in)
		return classResult
		// indexChild === indexSelectBoardChild && i === indexSelectBoardParent ? boxMapping.includes(index) ? 'selected selected-box' :: ''
	}
	// console.info(boardArrayForm)
  return (
		<>
		{isLoading ? 
		<div className="section-loading">
		<ul className="list-bars">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>:
		<table id="sudoku">
			<tbody>
			{boardForm?.map((arr, i) => {
				return (
					<tr key={i}>
						{arr?.map((el, index) => {
							return (
								<td  key={index}>
									<input
										className={classBox(index, i, board?.[i]?.[index])}
										onClick={(_) => handleSelectBoard(el, i, index)}
										min="1"
									 	max="9"
										value={boardForm?.[i]?.[index] ? boardForm?.[i]?.[index] : ''}
										onChange={(e) => {
											console.info(i, index)
											if(!board?.[i]?.[index]) {
												handleChangeBoard(e?.target?.value, i, index)
											}
											}}
										type="text"
									 />
								</td>
							)
						})}
					</tr>
				)
			})}
		</tbody>
	</table>
	}
		</>
  )
}

const mapStateToProps = (state) => ({
	board: state.boardArray,
	currentDifficulty: state.currentDifficulty,
	boardArrayForm: state.boardArrayForm, 
	isLoading: state.isLoading
})
const mapDispatchToProps = (dispatch) => ({
	getBoardRequest: (payload) => dispatch(getBoardTypeRequest(payload)),
	setBoardArrayForm: (payload) => dispatch(setBoardArrayForm(payload)),
	setSelectedBoard: (payload) => dispatch(setSelectedBoard(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Board)