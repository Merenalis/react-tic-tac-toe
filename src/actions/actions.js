export const HANDLECLICK = 'HANDLECLICK'
export const RESTART = 'RESTART'
export const PREVIOUS = 'PREVIOUS'
export const NEXT = 'NEXT'

export function action_handleClick(xIsNext, history__handleClick, squares) {
    return {
        type: HANDLECLICK,
        xIsNext: !xIsNext,
        history: history__handleClick.concat({
            squares: squares
        }),
        stepNumber: history__handleClick.length,
        history2:[],
    }
}

export function action_restart() {
    return {
        type: RESTART,
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

export function action_previous(xIsNext, historyLength, history, history2) {
    return {
        type: PREVIOUS,
        xIsNext: !xIsNext,
        stepNumber: historyLength - 1,
        history: history,
        history2: history2
    }
}

export function action_next(xIsNext, history, historyLength, new_history) {
    return {
        type: NEXT,
        xIsNext: !xIsNext,
        stepNumber: historyLength - 1,
        history: history,
        history2: new_history,
    }
}
