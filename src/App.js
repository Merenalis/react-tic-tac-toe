import React from 'react'
import './styles/index.css'
import {createStore} from "redux";
import {Provider} from "react-redux";
import ModalStart from "./components/ModalStart";
import reducer from './functions/Reducer'
import GameFunc from "./components/GameFunc";

const store = createStore(reducer)
function App() {
    return (
        <div>
            <ModalStart/>
            <Provider store={store}>
                <div className={'wrapper'}>
                    <GameFunc/>
                </div>
            </Provider>
        </div>

    )
}
export default App
