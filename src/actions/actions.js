export const HANDLECLICK = 'HANDLECLICK'
export const RESTART = 'RESTART'
export const CHANGE = 'CHANGE'
export const PREVIOUS = 'PREVIOUS'


export function actionHandleClick(xIsNext, historyHandleClick, squares, index) {
    return {
        type: HANDLECLICK,
        xIsNext: !xIsNext,
        history: historyHandleClick.concat({
            squares: squares
        }),
        stepNumber: historyHandleClick.length,
        index: index,
    }
}

export function actionRestart() {
    return {
        type: HANDLECLICK,
        xIsNext: true,
        stepNumber: 0,
        history: [
            {
                squares: Array(9).fill(null)
            }
        ],
        index: 0,
    }
}

export function actionChange(xIsNext, index) {
    return {
        type: CHANGE,
        xIsNext: !xIsNext,
        index: index,
    }
}

export function actionPrevious() {
    return {
        type: PREVIOUS,

    }
}

