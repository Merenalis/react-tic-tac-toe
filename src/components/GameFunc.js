import React from 'react'
import Board from './Board'
import '../styles/index.css'
import calculateWinner from '../functions/CalculateWinner'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {actionHandleClick, actionNext, actionPrevious, actionRestart} from "../actions/actions";
function GameFunc() {
    const dispatch = useDispatch();
    const data = useSelector(state => state, shallowEqual);

    function handleClick(i) {
        const historyHandleClick = data.history.slice(0, ++data.stepNumber)
        const current = historyHandleClick[historyHandleClick.length - 1]
        const squares = current.squares.slice()
        const winner = calculateWinner(squares)
        if (winner || squares[i]) {
            return
        }
        squares[i] = data.xIsNext ? 'X' : '0';

        dispatch(actionHandleClick(data.xIsNext, historyHandleClick, squares))
    }

    function restart() {
        dispatch(actionRestart())
    }

    function previousStep() {
        const history = data.history.slice(0, data.stepNumber)
        const history2 = data.history.slice(data.stepNumber, ++data.stepNumber)
        let historyLength = history.length;
        dispatch(actionPrevious(data.xIsNext, historyLength, history, history2))
    }

    function nextStep() {
        const historyNext = data.history.slice(0, ++data.stepNumber)
        const historyNextElem = data.history2.pop()
        const newHistory = historyNext.concat(historyNextElem)
        dispatch(actionNext(data.xIsNext, newHistory, newHistory.length, data.history2))
    }

    let status;
    const current = data.history[data.stepNumber]
    const winner = calculateWinner(current.squares)
    if (winner) {
        status = 'Winner is ' + winner
    } else if (data.stepNumber === 9) {
        status = 'Nobody win'
    }

    return (
        <div>
            <h1>Tic-tac-toe</h1>
            <div className="game">
                <div className="game-result">
                    <div>Result: {status}</div>
                    <button onClick={() => restart()}>Play again</button>
                    <br/>
                    <button disabled={data.stepNumber === 0} className={'btn-previous'}
                            onClick={() => previousStep()}>Previous
                    </button>
                    <button disabled={data.history2.length === 0} className={'btn-next'}
                            onClick={() => nextStep()}>Next
                    </button>
                </div>
                <div className="game-board">
                    <Board onClick={(i) => handleClick(i)} squares={current.squares}/>
                </div>
            </div>
        </div>
    )
}
export default GameFunc
