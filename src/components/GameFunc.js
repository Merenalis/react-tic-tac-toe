import React, {useCallback} from 'react'
import Board from './Board'
import '../styles/index.css'
import calculateWinner from '../functions/CalculateWinner'
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {actionHandleClick, actionRestart, actionChange} from "../actions/actions"
import selector from '../functions/Selector'

function GameFunc() {
    const dispatch = useDispatch()
    const data = useSelector(state => state, shallowEqual)
    const select = selector()

    const memoizedCallback = useCallback(
        (i) => {
            const squares = select.squares.slice()
            const winner = calculateWinner(squares)
            if (winner || squares[i]) {
                return
            }
            squares[i] = data.xIsNext ? 'X' : '0'
            dispatch(actionHandleClick(squares))
        },
        [data.index],
    );

    function handleClick(i) {
        memoizedCallback(i)
    }

    const memoizedRestart = useCallback(
        () => {
            dispatch(actionRestart())
        },
        [data.index],
    );

    const memoizedPrevious = useCallback(
        () => {
            let step = --data.index;
            dispatch(actionChange(step))
        },
        [data.index],
    );

    const memoizedNext = useCallback(
        () => {
            let step = ++data.index
            dispatch(actionChange(step))
        },
        [data.index],
    );
    const winner = calculateWinner(select.squares)

    return (
        <div>
            <h1>Tic-tac-toe</h1>
            <div className='game'>
                <div className='game-result'>
                    <div>Result: {winner ? 'Winner is ' + winner : data.index === 9 ? 'Nobody win' : ''}</div>
                    <button onClick={() => memoizedRestart()}>Play again</button>
                    <br/>
                    <button disabled={data.index === 0} className='btn-previous'
                            onClick={() => memoizedPrevious()}>Previous
                    </button>
                    <button disabled={data.index === data.stepNumber} className='btn-next'
                            onClick={() => memoizedNext()}>Next
                    </button>
                </div>
                <div className='game-board'>
                    <Board onClick={(i) => handleClick(i)} squares={select.squares}/>
                </div>
            </div>
        </div>
    )
}

export default GameFunc
