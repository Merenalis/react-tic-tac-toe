import {HANDLECLICK, CHANGE, RESTART} from '../actionTypes/actionTypes';

const initialState = {
    xIsNext: true,
    stepNumber: 0,
    history: [
        {
            squares: Array(9).fill(null)
        }
    ],
    index: 0,
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case HANDLECLICK: {
            let index = state.index
            let history = ++index !== state.stepNumber ? state.history.slice(0, ++state.index) : state.history
            return {
                ...state,
                xIsNext: state.index % 2 === 0,
                stepNumber: history.length,
                history: history.concat(action.history),
                index: history.length
            }
        }

        case CHANGE: {
            if (!(state.history[action.index] === undefined)) {
                return {
                    ...state,
                    xIsNext: state.index % 2 === 0,
                    index: action.index,
                }
            }
            break
        }

        case RESTART:
            return {
                ...state,
                xIsNext: true,
                stepNumber: 0,
                history: [
                    {
                        squares: Array(9).fill(null)
                    }
                ],
                index: 0,
            }

        default:
            return state;
    }
}