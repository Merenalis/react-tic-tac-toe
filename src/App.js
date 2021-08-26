import React from 'react'
import './styles/index.css'
import {createStore} from "redux";
import {Provider} from "react-redux";
import GameFunc from "./components/GameFunc";
import {connect} from "react-redux";
import ModalStart from "./components/ModalStart";
import reducer from './functions/Reducer'

const store = createStore(reducer)
const mapStateToProps = (state) => {
    return {
        xIsNext: state.xIsNext,
        stepNumber: state.stepNumber,
        history: state.history,
        history2: state.history2,
    }
}
const WrappedGameComp = connect(mapStateToProps)(GameFunc)

function App() {
    return (
        <div>
            <ModalStart/>
            <Provider store={store}>
                <div className={'wrapper'}>
                    <WrappedGameComp/>
                </div>
            </Provider>
        </div>

    )
}

export default App
