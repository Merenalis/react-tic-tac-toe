import {HANDLECLICK, CHANGE, RESTART} from "../actions/actions";

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
            let step = state.stepNumber
            let history = ++index !== step ? state.history.slice(0, ++state.index) : state.history
            return {
                ...state,
                xIsNext: !state.xIsNext,
                stepNumber: history.length,
                history: history.concat(action.history),
                index: history.length
            }
        }

        case CHANGE:
            return {
                ...state,
                xIsNext: !state.xIsNext,
                index: action.index,
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