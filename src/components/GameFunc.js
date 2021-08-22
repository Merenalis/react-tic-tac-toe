import React, {useState} from 'react'
import Board from './Board'
import '../styles/index.css'
import calculateWinner from '../functions/CalculateWinner'
import {useDispatch} from "react-redux";
import {action_handleClick, action_next, action_previous, action_restart} from "../actions/actions";

function GameFunc(props) {
    const dispatch = useDispatch();

    let xIsNextFromProp = props.xIsNext;
    let historyFromProp = props.history;
    let stepNumberFromProp = props.stepNumber;
    let historyFromProp2 = props.history2;


    function handleClick(i) {
        const history__handleClick = historyFromProp.slice(0, ++stepNumberFromProp)
        const current = history__handleClick[history__handleClick.length - 1]
        const squares = current.squares.slice()
        const winner = calculateWinner(squares, stepNumberFromProp)
        if (winner || squares[i]) {
            return
        }
        squares[i] = xIsNextFromProp ? 'X' : '0';

        dispatch(action_handleClick(xIsNextFromProp, history__handleClick, squares))
    }


    function restart() {
        dispatch(action_restart())
    }

    function previousStep() {
        const history = historyFromProp.slice(0, stepNumberFromProp)
        const history2 = historyFromProp.slice(stepNumberFromProp, ++stepNumberFromProp)
        let historyLength = history.length;
        dispatch(action_previous(xIsNextFromProp, historyLength, history, history2))
    }

    function nextStep() {
        const history__next = historyFromProp.slice(0, ++stepNumberFromProp)
        const history_next_elem = historyFromProp2.pop()
        const new_history = history__next.concat(history_next_elem)
        dispatch(action_next(xIsNextFromProp, new_history, new_history.length, historyFromProp2))
    }

    let status;
    const current = historyFromProp[stepNumberFromProp]
    const winner = calculateWinner(current.squares, stepNumberFromProp)

    if (winner) {
        status = winner === 1 ? 'Nobody win' : 'Winner is ' + winner
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
                    <button disabled={JSON.stringify(historyFromProp2) === "[]"} className={'btn-next'}
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
