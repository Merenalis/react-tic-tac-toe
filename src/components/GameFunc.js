import React from 'react'
import Board from './Board'
import '../styles/index.css'
import calculateWinner from '../functions/CalculateWinner'
import {useDispatch} from "react-redux";
import {actionHandleClick, actionNext, actionPrevious, actionRestart} from "../actions/actions";

function GameFunc(props) {
    const dispatch = useDispatch();
    let xIsNextFromProp = props.xIsNext;
    let historyFromProp = props.history;
    let stepNumberFromProp = props.stepNumber;
    let historyFromProp2 = props.history2;


    function handleClick(i) {
        const historyHandleClick = historyFromProp.slice(0, ++stepNumberFromProp)
        const current = historyHandleClick[historyHandleClick.length - 1]
        const squares = current.squares.slice()
        const winner = calculateWinner(squares)
        if (winner || squares[i]) {
            return
        }
        squares[i] = xIsNextFromProp ? 'X' : '0';

        dispatch(actionHandleClick(xIsNextFromProp, historyHandleClick, squares))
    }

    function restart() {
        dispatch(actionRestart())
    }

    function previousStep() {
        const history = historyFromProp.slice(0, stepNumberFromProp)
        const history2 = historyFromProp.slice(stepNumberFromProp, ++stepNumberFromProp)
        let historyLength = history.length;
        dispatch(actionPrevious(xIsNextFromProp, historyLength, history, history2))
    }

    function nextStep() {
        const historyNext = historyFromProp.slice(0, ++stepNumberFromProp)
        const historyNextElem = historyFromProp2.pop()
        const newHistory = historyNext.concat(historyNextElem)
        dispatch(actionNext(xIsNextFromProp, newHistory, newHistory.length, historyFromProp2))
    }

    let status;
    const current = historyFromProp[stepNumberFromProp]
    const winner = calculateWinner(current.squares)
    if (winner) {
        status = 'Winner is ' + winner
    } else if (stepNumberFromProp === 9) {
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
                    <button disabled={stepNumberFromProp === 0} className={'btn-previous'}
                            onClick={() => previousStep()}>Previous
                    </button>
                    <button disabled={historyFromProp2.length === 0} className={'btn-next'}
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
