export const HANDLECLICK = 'HANDLECLICK'
export const RESTART = 'RESTART'
export const CHANGE = 'CHANGE'

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



