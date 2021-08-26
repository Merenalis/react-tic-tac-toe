import React from 'react'
import '../styles/index.css'
import GameFunc from "../components/GameFunc";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber,
        history: state.history,
        history2: state.history2,
    }
}
const WrappedGame = connect(mapStateToProps)(GameFunc)

function WrappedGameComp() {
    return (
        <div>
            <WrappedGame/>
        </div>

    )
}

export default WrappedGameComp
