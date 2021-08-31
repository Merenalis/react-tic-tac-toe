import {HANDLECLICK, CHANGE} from "../actions/actions";

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
        case HANDLECLICK:
            return {
                ...state,
                xIsNext: action.xIsNext,
                stepNumber: action.stepNumber,
                history: action.history,
                index: action.index,
            }

        case CHANGE:
            return {
                ...state,
                xIsNext: action.xIsNext,
                index: action.index,
            }


        default:
            return state;
    }
}