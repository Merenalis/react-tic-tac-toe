import {HANDLECLICK, CHANGE, RESTART} from "../actionTypes/actionTypes";

export function actionHandleClick(squares) {
    return {
        type: HANDLECLICK,
        history: ({
            squares: squares
        }),

    }
}

export function actionRestart() {
    return {
        type: RESTART,

    }
}

export function actionChange(index) {
    return {
        type: CHANGE,
        index: index,
    }
}



