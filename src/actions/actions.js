export const HANDLECLICK = 'HANDLECLICK'
export const RESTART = 'RESTART'
export const PREVIOUS = 'PREVIOUS'
export const TEST = 'TEST'

export function actionHandleClick(xIsNext, historyHandleClick, squares) {
    return {
        type: HANDLECLICK,
        xIsNext: !xIsNext,
        history: historyHandleClick.concat({
            squares: squares
        }),
        stepNumber: historyHandleClick.length,
        history2: [],
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
        history2: [],
    }
}

export function actionPrevious(xIsNext, historyLength, history, history2) {
    return {
        type: PREVIOUS,
        xIsNext: !xIsNext,
        stepNumber: historyLength - 1,
        history: history,
        history2: history2
    }
}

export function actionNext(xIsNext, history, historyLength, newHistory) {
    return {
        type: HANDLECLICK,
        xIsNext: !xIsNext,
        stepNumber: historyLength - 1,
        history: history,
        history2: newHistory,
    }
}
export function actionTest(step) {
    return {
        type: TEST,
        stepNumber:step,

    }
}
