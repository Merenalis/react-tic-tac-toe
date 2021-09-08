import React, {useCallback, useMemo} from 'react'
import Board from './Board'
import '../styles/index.css'
import calculateWinner from '../functions/CalculateWinner'
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {actionHandleClick, actionRestart, actionChange} from "../store/actions/actions"
import useCurrent from '../functions/UseCurrent'

function GameFunc() {
    const dispatch = useDispatch()
    const data = useSelector(state => state, shallowEqual)
    const selectHistory = useCurrent()
    const memoizedWinner = useMemo(() => calculateWinner(selectHistory.squares), selectHistory.squares);

    const memoizedCallback = useCallback(
        (i) => {
            const squares = selectHistory.squares.slice()
            if (memoizedWinner || squares[i]) {
                return
            }
            squares[i] = data.xIsNext ? 'X' : '0'
            dispatch(actionHandleClick(squares))
        },
        [data.index],
    );

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

    return (
        <div>
            <h1>Tic-tac-toe</h1>
            <div className='game'>
                <div className='game-result'>
                    <div>Result: {memoizedWinner ? 'Winner is ' + memoizedWinner : data.index === 9 ? 'Nobody win' : ''}</div>
                    <button onClick={memoizedRestart}>Play again</button>
                    <br/>
                    <button disabled={data.index === 0} className='btn-previous btn-style'
                            onClick={memoizedPrevious}>Previous
                    </button>
                    <button disabled={data.index === data.stepNumber} className='btn-next btn-style'
                            onClick={memoizedNext}>Next
                    </button>
                </div>
                <div className='game-board'>
                    <Board onClick={memoizedCallback} squares={selectHistory.squares}/>
                </div>
            </div>
        </div>
    )
}

export default GameFunc
