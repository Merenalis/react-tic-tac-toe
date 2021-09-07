import React from 'react'
import '../styles/index.css';

function Square(props) {
    return (
        <div>
            <button className='square' onClick={props.onClick}>
                {props.value}
            </button>
        </div>
    );
}

export default Square;