import React from 'react'
import './styles/index.css'
import {Provider} from 'react-redux'
import GameFunc from './components/GameFunc'
import store from './store/store';
import ModalStart from './components/ModalStart';

function App() {
    return (
        <div>
            <ModalStart/>
            <Provider store={store}>
                <div className='wrapper'>
                    <GameFunc/>
                </div>
            </Provider>
        </div>
    )
}

export default App
