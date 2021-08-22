import React from 'react'
import './styles/index.css'
import {createStore} from "redux";
import {Provider} from "react-redux";
import GameFunc from "./components/GameFunc";
import {HANDLECLICK, RESTART, PREVIOUS, NEXT} from "./actions/actions";
import {connect} from "react-redux";
import ModalStart from "./components/ModalStart";

const initialState = {
    xIsNext: true,
    stepNumber: 0,
    history: [
        {
            squares: Array(9).fill(null)
        }
    ],
    history2: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case HANDLECLICK:
            return {...state, xIsNext: action.xIsNext, stepNumber: action.stepNumber, history: action.history}

        case RESTART: {
            return {...state, xIsNext: action.xIsNext, stepNumber: action.stepNumber, history: action.history}

        }

        case PREVIOUS: {
            return {
                ...state,
                xIsNext: action.xIsNext,
                stepNumber: action.stepNumber,
                history: action.history,
                history2: state.history2.concat(action.history2)
            }
        }

        case NEXT: {
            return {
                ...state,
                xIsNext: action.xIsNext,
                stepNumber: action.stepNumber,
                history: action.history,
                history2: action.history2
            }
        }

        default:
            return state;
    }
}

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
