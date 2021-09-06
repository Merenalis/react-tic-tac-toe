import React, {useCallback} from 'react'
import Board from './Board'
import '../styles/index.css'
import calculateWinner from '../functions/CalculateWinner'
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {actionHandleClick, actionRestart, actionChange} from "../actions/actions"

function GameFunc() {
    const dispatch = useDispatch()
    const data = useSelector(state => state, shallowEqual)

    const memoizedCallback = useCallback(
        (i) => {
            if (data.stepNumber > data.index) {

                data.history.slice(data.index, data.stepNumber)
                data.stepNumber = data.index

            }
            const historyHandleClick = data.history.slice(0, ++data.stepNumber)
            const current = data.history[data.index]
            const squares = current.squares.slice()
            const winner = calculateWinner(squares)
            if (winner || squares[i]) {
                return
            }
            squares[i] = data.xIsNext ? 'X' : '0'
            dispatch(actionHandleClick(data.xIsNext, historyHandleClick, squares, data.stepNumber))
        },
        [data.index],
    );

    function handleClick(i) {
        memoizedCallback(i)
    }

    function restart() {
        memoizedRestart()
    }

    const memoizedRestart = useCallback(
        () => {
            dispatch(actionRestart())
        },
        [data.index],
    );

    function previousStep() {
        memoizedPrevious()
    }

    const memoizedPrevious = useCallback(
        () => {
            let step = --data.index;
            dispatch(actionChange(data.xIsNext, step))
        },
        [data.index],
    );

    function nextStep() {
        memoizedNext()
    }

    const memoizedNext = useCallback(
        () => {
            let step = ++data.index
            dispatch(actionChange(data.xIsNext, step))
        },
        [data.index],
    );
    const current = data.history[data.index]
    const winner = calculateWinner(current.squares)
    const stylePrev = {
        cursor: data.index === 0 ? 'default' : 'pointer',
        backgroundColor: data.index === 0 ? 'gray' : 'white'
    }
    const styleNext = {
        cursor: data.index === data.stepNumber ? 'default' : 'pointer',
        backgroundColor: data.index === data.stepNumber ? 'gray' : 'white'
    }
    return (
        <div>
            <h1>Tic-tac-toe</h1>
            <div className="game">
                <div className="game-result">
                    <div>Result: {winner ? 'Winner is ' + winner : data.index === 9 ? 'Nobody win' : ''}</div>
                    <button onClick={() => restart()}>Play again</button>
                    <br/>
                    <button disabled={data.index === 0} style={stylePrev} className={'btn-previous'}
                            onClick={() => previousStep()}>Previous
                    </button>
                    <button disabled={data.index === data.stepNumber} style={styleNext} className={'btn-next'}
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
