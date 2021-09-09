import React, {Component} from 'react';
import Square from './Square';
import '../styles/index.css';

class Board extends Component {
    renderSquare(i) {
        return (
            <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
        );
    }


    render() {
        let count = 0
        let countArr = Array(3).fill(null)

        const listItems = countArr.map((number) =>
            <div key={number} className='board-row'>
                {
                    countArr.map(() =>
                        this.renderSquare(count++)
                    )
                }
            </div>
        );
        return (
            <div className='wrapper'>
                {listItems}
            </div>
        );
    }
}


export default Board;