import React, {Component} from 'react';
import Board from "./Board";
import '../styles/index.css';
import calculateWinner from "./CalculateWinner";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                {
                    squares: Array(9).fill(null),
                }
            ]
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        let winner = calculateWinner(squares, this.state.stepNumber);
        if (winner || squares[i]) {
            return;
        }


        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState({
            history: history.concat({
                squares: squares,
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,

        })

    }

    restart() {
        const boxes = document.getElementsByClassName('square');
        for (let ii = 0; ii < 9; ii++) {
            boxes[ii].innerHTML = '';
        }
        this.setState({
            xIsNext: true,
            stepNumber: 0,
            history: [
                {
                    squares: Array(9).fill(null),
                }
            ]
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares, this.state.stepNumber);
        let status;
        if (winner) {
            status = winner === 1 ? 'Nobody win' : 'Winner is ' + winner;
        }
        return (
            <div>
                <h1>Tic-tac-toe</h1>
                <div className="game">
                    <div className="game-result">
                        <div>Result: {status}</div>
                        <button onClick={(e) => this.restart()}>Play again</button>
                    </div>
                    <div className="game--board">
                        <Board onClick={(i) => this.handleClick(i)} squares={current.squares}/>
                    </div>

                </div>
            </div>

        );
    }
}
export default Game;