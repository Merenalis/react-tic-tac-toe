import {HANDLECLICK, CHANGE,TEST} from "../actions/actions";

const initialState = {
    xIsNext: true,
    stepNumber: 0,
    history: [
        {
            squares: Array(9).fill(null)
        }
    ],
    index: 0,
    i:null
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
        case TEST:
            return {
                ...state,
                i: action.i,

            }


        default:
            return state;
    }
}