import {HANDLECLICK, PREVIOUS} from "../actions/actions";

const initialState = {
    xIsNext: true,
    stepNumber: 0,
    history: [
        {
            squares: Array(9).fill(null)
        }
    ],
    history2: []
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case HANDLECLICK:
            return {
                ...state,
                xIsNext: action.xIsNext,
                stepNumber: action.stepNumber,
                history: action.history,
                history2: action.history2
            }

        case PREVIOUS:
            return {
                ...state,
                xIsNext: action.xIsNext,
                stepNumber: action.stepNumber,
                history: action.history,
                history2: state.history2.concat(action.history2)
            }

        default:
            return state;
    }
}