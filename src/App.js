import React from 'react'
import './styles/index.css'
import {createStore} from "redux";
import {Provider} from "react-redux";
import ModalStart from "./components/ModalStart";
import reducer from './functions/Reducer'
import WrappedGameComp from "./components/WrappedGameComp";

const store = createStore(reducer)
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
