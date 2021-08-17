function calculateWinner(squares, current) {


    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        let results;

        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {

            results = squares[a];
        }else if (current===9) {
            results = 1;
        }
        if (results !== undefined) {

            return results;

        }
    }
}
export default calculateWinner;